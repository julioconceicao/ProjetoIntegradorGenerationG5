using IntegratorProject.src.data;
using IntegratorProject.src.repositories;
using IntegratorProject.src.repositories.implements;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
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
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            IConfigurationRoot config = new ConfigurationBuilder()
                .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                .AddJsonFile("appsettings.json")
                .Build();
            services.AddDbContext<IntegratorProjectContext>(opt => opt.UseSqlServer(config.GetConnectionString("DefaultConnection")));
            services.AddControllers();

            services.AddScoped<IUser,UserRepository>();
            services.AddScoped<IOrder,OrderRepository>();
            services.AddScoped<IKit,KitRepository>();

            // Controllers
            services.AddCors();
            services.AddControllers();
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
            .AllowAnyHeader());
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

        }
    }
}