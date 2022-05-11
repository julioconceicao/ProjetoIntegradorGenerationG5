using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IntegratorProject.src.repositories
{
    /// <summary>
    /// <para>Created Interface IUser</para>
    /// <para>By: Julio Conceição</para>
    /// <para>v 1.0</para>
    /// <para>05.05.2020</para>
    /// </summary>
    public interface IUser
    {
        Task AddNewUserAsync(NewUserDTO user);
        Task UpDateUserAsync(UpDateUserDTO user);
        Task DeleteUserAsync(int id);
        Task<List<UserModel>> GetAllOngsAsync();
        Task<List<UserModel>> GetUserByAdressAsync(string adress);
        UserModel GetUserByIdAsync(int id);
    }
}