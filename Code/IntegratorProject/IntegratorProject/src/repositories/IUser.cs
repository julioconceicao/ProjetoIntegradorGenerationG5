using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using System.Collections.Generic;

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
        void AddNewUser(NewUserDTO user);
        void UpDateUser(UpDateUserDTO user);
        void DeleteUser(int id);
        List<UserModel> GetAllOngs();
        List<UserModel> GetUserByAdress(string adress);
        UserModel GetUserById(int id);
    }
}