using IntegratorProject.src.models;
using System.ComponentModel.DataAnnotations;

/// <summary>
/// <para>Resume: Mirror class to create a new order </para>
/// <para>By: Lethicya Lopes and Matheus Rodrigues</para>
/// <para>v 1.0</para>
/// <para>Date: 05/05/2022</para>
/// </summary>


namespace IntegratorProject.src.dtos
{
    public class NewOrderDTO
    {
        [Required, StringLength(30)]
        public string EmailCreator { get; set; }

        [Required]
<<<<<<< HEAD
        public int Id { get; set; }

        [Required, StringLength(100)]
        public string Description { get; set; }
        public UpdateOrderDTO(int id, string description)
=======
        public int KitId { get; set; }

        public NewOrderDTO(string emailCreator, int kitId)
>>>>>>> 24ae18c0055746a4fdef1580b5ba36c7b4f0b91f
        {
            EmailCreator = emailCreator;
            KitId = kitId;
        }

    }

}
