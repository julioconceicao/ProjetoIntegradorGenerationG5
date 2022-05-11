using IntegratorProject.src.models;

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
        void CreateUserNotDuplicated(UserDTO user);
        string GenerateToken(UserModel user);
        AuthorizationDTO GetAuthorization(AuthenticateDTO authentication);

    }
}
