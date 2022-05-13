using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IntegratorProject.src.repositories
{
    /// <summary>
    /// <para>Created Interface IUser</para>
    /// <para>By:</para>
    /// <para>v 1.0</para>
    /// <para>05.05.2020</para>
    /// </summary>
    public interface IUser
    {
        Task AddNewUserAsync(NewUserDTO user);
        Task UpdateUserAsync(UpdateUserDTO user);
        Task DeleteUserAsync(int id);
        Task<List<UserModel>> GetAllOngsAsync();
        Task<List<UserModel>> GetUserByAdressAsync(string adress);
        Task<UserModel> GetUserByIdAsync(int id);
        Task<UserModel> GetUserByEmailAsync(string email);
    }
}