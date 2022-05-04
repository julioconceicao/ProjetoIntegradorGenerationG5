using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IntegratorProject.src.models
{
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

