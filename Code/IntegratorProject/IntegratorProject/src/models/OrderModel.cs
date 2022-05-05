using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IntegratorProject.src.models
{
    /// <summary>
    /// <para>Creating order attributes.</para>
    /// <para>By: Matheus Rodrigues, Lethicya Lopes</para>
    /// <para>v 1.0</para>
    /// <para>04.05.2022</para>
    /// </summary>
    [Table("tb_Order")]
    public class OrderModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [ForeignKey("Fk_User")]
        public UserModel User { get; set; }

        [ForeignKey("Fk_Kit")]
        public KitModel Kit { get; set; }
    }
}

