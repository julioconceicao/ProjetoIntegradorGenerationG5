﻿using IntegratorProject.src.data;
using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using IntegratorProject.src.utilities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntegratorProject.src.repositories.implements
{
    /// <summary>
    /// <para>Implementing User Interface at UserRepository.</para>
    /// <para>By: João Vitor, Julio Conceição, José Vinicius</para>
    /// <para>v 1.0</para>
    /// <para>05.05.2022</para>
    /// </summary>
    public class UserRepository : IUser
    {
        #region attributes
        private readonly IntegratorProjectContext _context;
        #endregion attributes

        #region constructors
        public UserRepository(IntegratorProjectContext context)
        {
            _context = context;
        }
        #endregion constructors

        #region methods
        public async Task AddNewUserAsync(NewUserDTO user)
        {
           await _context.Users.AddAsync(new UserModel
            {
                Name = user.Name,
                CPF_CNPJ = user.CPF_CNPJ,
                Email = user.Email,
                Password = user.Password,           
                Adress = user.Adress,
                NameAgent = user.NameAgent,
                Type = user.Type
            });
           await _context.SaveChangesAsync();
        }

        public async Task DeleteUserAsync(int id)
        {
            _context.Users.Remove(await GetUserByIdAsync(id));
           await _context.SaveChangesAsync();
        }

        public async Task<UserModel> GetUserByIdAsync(int id)
        {
            return await _context.Users
                .FirstOrDefaultAsync(u => u.Id == id);
        }

        public async Task UpdateUserAsync(UpdateUserDTO user)
        {
            var userModel = await GetUserByIdAsync(user.Id);
            userModel.Name = user.Name;
            userModel.Password = user.Password;
            userModel.Adress = user.Adress;
            userModel.NameAgent = user.NameAgent;
            _context.Users.Update(userModel);
            await _context.SaveChangesAsync();
        }

        public async Task<List<UserModel>> GetUserByAdressAsync(string adress)
        {
            return await _context.Users
                .Where(u => u.Adress.Contains(adress))
                .ToListAsync();
        }

        public async Task<List<UserModel>> GetAllOngsAsync()
        {
            return await _context.Users
                .Where(u => u.Type == UserType.ONG)
                .ToListAsync();
        }

        public async Task<UserModel> GetUserByEmailAsync(string email)  
        {
            return await _context.Users
                .FirstOrDefaultAsync(u => u.Email == email);
        }
        #endregion methods
    }
}
