using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace IntegratorProject.src.models
{
    /// <summary>
    /// <para>Implementing User Interface at UserRepository.</para>
    /// <para>By: João Vitor, Julio Conceição, José Vinicius</para>
    /// <para>v 1.0</para>
    /// <para>05.05.2022</para>
    /// </summary>

    [Table("tb_User")]
    public class UserModel
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

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

        [Required]
        public UserType Type { get; set; }





        /// <summary>
        /// <para>Creating orders list.</para>
        /// <para>By: Julio Conceicao</para>
        /// <para>v 1.0</para>
        /// <para>04.05.2022</para>
        /// </summary>

        [JsonIgnore]

        public List<OrderModel> MyOrders { get; set; }
    }

    /// <summary>
    /// <para>Creating user type.</para>
    /// <para>By: everyone</para>
    /// <para>v 1.0</para>
    /// <para>04.05.2022</para>
    /// </summary>

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum UserType
    {
        Ong,
        Donor
    }
}
