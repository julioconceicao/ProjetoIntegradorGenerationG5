﻿using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using IntegratorProject.src.repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace IntegratorProject.src.services
{
    public class AuthenticationServices : IAuthentication
    {
        #region Attributes
        private readonly IUser _repository;
        public IConfiguration Configuration { get; }
        #endregion

        #region Constructors
        public AuthenticationServices(IUser repository, IConfiguration configuration)
        {
            _repository = repository;
            Configuration = configuration;
        }
        #endregion

        #region Method

        /// <summary>
        /// <para>Resumo: Asynchronous method responsible for enconding password</para>
        /// </summary>
        /// <param name="password">AuthenticationServices</param>
        public string EncodePassword(string password)
        {
            var bytes = Encoding.UTF8.GetBytes(password);
            return Convert.ToBase64String(bytes);
        }

        /// <summary>
        /// <para>Resumo: Asynchronous method responsible for creating user without duplicating in the database</para>
        /// </summary>
        /// <param name="dto">NewUserDTO</param>
        public async Task CreateUserNotDuplicatedAsync(NewUserDTO dto)
        {
            var user = await _repository.GetUserByEmailAsync(dto.Email);
            if (user != null) throw new Exception("This email is already being used");
            dto.Password = EncodePassword(dto.Password);
            await _repository.AddNewUserAsync(dto);
        }

        /// <summary>
        /// <para>Resumo: Method responsible for generating JWT token</para>
        /// </summary>
        /// <param name="user">UsuarioModelo</param>
        /// <returns>string</returns>
        public string GenerateToken(UserModel user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(Configuration["Settings:Secret"]);
            var tokenDescription = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(   
            new Claim[]
            {
                new Claim(ClaimTypes.Email, user.Email.ToString()),
                new Claim(ClaimTypes.Role, user.Type.ToString())
            }),
                Expires = DateTime.UtcNow.AddHours(2),
                SigningCredentials = new SigningCredentials(
            new SymmetricSecurityKey(key),
            SecurityAlgorithms.HmacSha256Signature
            )
            };
            var token = tokenHandler.CreateToken(tokenDescription);
            return tokenHandler.WriteToken(token);
        }

        /// <summary>
        /// <para>Resumo: Responsible async method return authorization to authenticated user</para>
        /// </summary>
        /// <param name="authentication">AutenticarDTO</param>
        /// <returns>AuthenticateDTO</returns>
        /// <exception cref="Exception">Usuário não encontrado</exception>
        /// <exception cref="Exception">Senha incorreta</exception>
        public async Task <AuthorizationDTO> GetAuthorizationAsync(AuthenticateDTO authentication)
        {
            var user = await _repository.GetUserByEmailAsync(authentication.Email);
            if (user == null) throw new Exception("User not found");
            if (user.Password != EncodePassword(authentication.Password)) throw new Exception("Incorrect Password ");
            return new AuthorizationDTO(user.Id, user.Email, user.Type, GenerateToken(user));
        }
        #endregion methodz  
    }
}
