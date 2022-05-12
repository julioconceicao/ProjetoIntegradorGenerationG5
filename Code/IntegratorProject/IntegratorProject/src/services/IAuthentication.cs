using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
<<<<<<< HEAD
=======
using System.Threading.Tasks;
>>>>>>> 25661dc6be9a42fc99e95f1fd1aa309455bdf07a

namespace IntegratorProject.src.services
{
    /// <summary>
    /// <para>Created Interface IAuthentication</para>
    /// <para>By: Lethicya Lopes</para>
    /// <para>v 1.0</para>
    /// <para>11.05.2022</para>
    /// </summary>

    public interface IAuthentication
    {
        string EncodePassword(string password);
<<<<<<< HEAD
        void CreateUserNotDuplicated(NewUserDTO user);
=======
        Task CreateUserNotDuplicatedAsync(NewUserDTO user);
>>>>>>> 25661dc6be9a42fc99e95f1fd1aa309455bdf07a
        string GenerateToken(UserModel user);
        Task<AuthorizationDTO> GetAuthorizationAsync(AuthenticateDTO authentication);
    }
}   
