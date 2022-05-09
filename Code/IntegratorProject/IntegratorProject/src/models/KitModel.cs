using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace IntegratorProject.src.models
{
    /// <summary>
    /// <para>Resume> Creating Kits Attributes</para>
    /// <para>By: Leticia Zimerer, Michelli Oliveira and Paulo Almeida </para>
    /// <para>Version: 1.0</para>
    /// <para>Date:04/05/2022</para>
    /// </summary>
    [Table("tb_Kit")]
    public class KitModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required, StringLength(30)]
        public string Name { get; set; }

        [Required, StringLength(20)]
        public string ProductClass { get; set; }

        [Required]
        public float Price { get; set; }

        [Required, StringLength(30)]
        public string ExpirationDate { get; set; }
    }
}
