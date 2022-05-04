using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IntegratorProject.src.models
{/// <summary>
 /// <para>Creating user attributes</para>
 /// <para>By: José Vinicius</para>
 /// <para>v 1.0</para>
 /// <para>Apr.29.2022</para>
 /// </summary>

    [Table("tb_User")]
    public class UserModel
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required,StringLength(20)]
        public string Name { get; set; }

        [Required,StringLength(15)]
        public int CPF_CNPJ { get; set; }

        [Required, StringLength(30)]
        public string Email { get; set; }
        [Required, StringLength(20)]
        public string Password { get; set; }
        [Required, StringLength(50)]
        public string Adress { get; set; }
        [Required, StringLength(30)]
        public string NameAgent { get; set; }
        [Required, StringLength(255)]
        public string Documents { get; set; }











    }
}
