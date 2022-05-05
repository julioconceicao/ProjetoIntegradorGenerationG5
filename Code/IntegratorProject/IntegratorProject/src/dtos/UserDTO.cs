using System.ComponentModel.DataAnnotations;

namespace IntegratorProject.src.dtos
{
    /// <summary>
    /// <para>Resumo:Mirror Class for create new user</para>
    /// <para>Criado por: Joaoms98</para>
    /// <para>Versão: 1.0</para>
    /// <para>Data: 29/04/2022</para>
    /// </summary>
    public class NewUserDTO
    {
        [Required, StringLength(20)]
        public string Name { get; set; }

        [Required, StringLength(14)]
        public int CPF_CNPJ { get; set; }

        [Required, StringLength(30)]
        public string Email { get; set; }

        [Required, StringLength(20)]
        public string Password { get; set; }

        [Required, StringLength(50)]
        public string Adress { get; set; }

        [StringLength(30)]
        public string NameAgent { get; set; }

        public NewUserDTO(string name, int cpf_cnpj, string email, string password, string adress, string nameagent)
        {
            Name = name;
            CPF_CNPJ = cpf_cnpj;
            Email = email;
            Password = password;
            Adress = adress;
            NameAgent = nameagent;
        }
    }
    /// <summary>
    /// <para>Resumo:Mirror class for update user</para>
    /// <para>Criado por: Joaoms98</para>
    /// <para>Versão: 1.0</para>
    /// <para>Data: 29/04/2022</para>
    /// </summary>
    public class UpDateUserDTO
    {
        [Required]
        public int Id { get; set; }

        [Required, StringLength(20)]
        public string Name { get; set; }

        [Required, StringLength(30)]
        public string Password { get; set; }
        
        [Required, StringLength(50)]
        public string Adress { get; set; }

        [StringLength(30)]
        public string NameAgent { get; set; }

        public UpDateUserDTO(string name, string password, string adress, string nameagent)
        {
            Name = name;
            Password = password;
            Adress = adress;
            NameAgent = nameagent;
        }
    }
}
