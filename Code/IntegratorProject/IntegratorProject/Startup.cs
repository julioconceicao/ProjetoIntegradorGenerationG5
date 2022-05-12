using IntegratorProject.src.data;
using IntegratorProject.src.repositories;
using IntegratorProject.src.repositories.implements;
using IntegratorProject.src.services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntegratorProject
{
    /// <summary>
    /// <para>Resume> Creating connection string</para>
    /// <para>By: José Vinicius</para>
    /// <para>Version: 1.0</para>
    /// <para>Date: 05/05/2022</para>
    /// </summary>
    public class Startup
    {
        public IConfiguration Configuration { get; }
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }        

        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddDbContext<IntegratorProjectContext>(opt => opt.UseSqlServer(Configuration["ConnectionStrings:DefaultConnection"]));  
            
            services.AddScoped<IUser,UserRepository>();
            services.AddScoped<IOrder,OrderRepository>();
            services.AddScoped<IKit,KitRepository>();            

            services.AddCors();
            services.AddControllers();

            services.AddScoped<IAuthentication, AuthenticationServices>();

            var key = Encoding.ASCII.GetBytes(Configuration["Settings:Secret"]);
            services.AddAuthentication(a =>
            {
                a.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                a.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(b =>
            {
                b.RequireHttpsMetadata = false;
                b.SaveToken = true;
                b.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });
        }    

        /// <summary>
        /// <para>Resume> Configure database initialize from context</para>
        /// <para>By: José Vinicius</para>
        /// <para>Version: 1.0</para>
        /// <para>Date: 05/05/2022</para>
        /// </summary>
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IntegratorProjectContext context)
        {
            if (env.IsDevelopment())
            {
                context.Database.EnsureCreated();
                app.UseDeveloperExceptionPage();              
            }

            // Production Environment
            // Routes
            app.UseRouting();


            app.UseCors(c => c
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
            );

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

        }
    }
}