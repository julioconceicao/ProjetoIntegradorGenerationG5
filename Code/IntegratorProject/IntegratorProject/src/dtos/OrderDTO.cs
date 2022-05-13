using IntegratorProject.src.models;
using System.ComponentModel.DataAnnotations;

namespace IntegratorProject.src.dtos
{
    /// <summary>
    /// <para>Resume: Mirror class to create a new order </para>
    /// <para>By: Lethicya Lopes and Matheus Rodrigues</para>
    /// <para>v 1.0</para>
    /// <para>Date: 05/05/2022</para>
    /// </summary>
    public class NewOrderDTO
    {
        [Required, StringLength(30)]
        public string EmailCreator { get; set; }

        [Required]
        public int IdKit { get; set; }

        public NewOrderDTO(string emailCreator, int idKit)
        {
            EmailCreator = emailCreator;
            IdKit = idKit;
        }
    }
}
