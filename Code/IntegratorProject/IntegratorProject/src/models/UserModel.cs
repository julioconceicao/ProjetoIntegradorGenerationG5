using IntegratorProject.src.utilities;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace IntegratorProject.src.models
{
    /// <summary>
    /// <para>Summary: Class responsible for representing tb_users in the database.</para>
    /// <para>created por: Julio Conseição, João Vitor, José Vinicus</para>
    /// <para>Version: 1.0</para>
    /// <para>Date: 12/05/2022</para>
    /// </summary>

    [Table("tb_User")]
    public class UserModel
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required, StringLength(20)]
        public string Name { get; set; }

        [Required, StringLength(14)] 
        public string CPF_CNPJ { get; set; }

        [Required, StringLength(30)]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required, StringLength(50)]
        public string Adress { get; set; }

        [StringLength(30)]
        public string NameAgent { get; set; }

        [Required]
        public UserType Type { get; set; }

        [JsonIgnore]
        public List<OrderModel> MyOrders { get; set; }
    }
}
