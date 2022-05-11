using System.ComponentModel.DataAnnotations;
using IntegratorProject.src.utilities;

namespace IntegratorProject.src.dtos
{
    public class AuthenticateDTO
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public AuthenticateDTO(string email, string password)
        {
            Email = email;
            Password = password;
        }
    }

    public class AuthorizationDTO
    {
            public int Id { get; set; }
            public string Email { get; set; }
            public UserType Type { get; set; }
            public string Token { get; set; }

            public AuthorizationDTO(int id, string email, UserType type, string token)
            {
                Id = id;
                Email = email;
                UserType = type;
                Token = token;
            }
    }
}