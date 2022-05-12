using System.ComponentModel.DataAnnotations;


namespace IntegratorProject.src.dtos
{
    /// <summary>
    /// <para>Resume: Mirror class responsible for create a new kit</para>
    /// <para>Created by: Paulo Almeida, Leticia Zimerer and Michelli Oliveira</para>
    /// <para>Version: 1.0</para>
    /// <para>Date: 05/05/2022</para>
    /// </summary>
    public class NewKitDTO
    {
        [Required, StringLength(30)]
        public string Name { get; set; }

        [Required, StringLength(20)]
        public string ProductClass { get; set; }

        [Required]
        public double Price { get; set; }

        [Required, StringLength(50)]
        public string ExpirationDate { get; set; }

        public NewKitDTO(string name, string productClass, double price, string expirationDate)
        {
            Name = name;
            ProductClass = productClass;
            Price = price;
            ExpirationDate = expirationDate;
        }
    }
    /// <summary>
    /// <para>Resume: Mirror class responsible for Update a kit</para>
    /// <para>Created by: Paulo Almeida, Leticia Zimerer and Michelli Oliveira</para>
    /// <para>Version: 1.0</para>
    /// <para>Date: 05/05/2022</para>
    /// </summary>
    public class UpdateKitDTO //Joao: alterado o nome do DTO de UpDate para Update em todas as referências.
    {            
        [Required]
        public int Id { get; set; }

        [Required, StringLength(30)]
        public string Name { get; set; }

        [Required, StringLength(20)]
        public string ProductClass { get; set; }

        [Required]
        public double Price { get; set; }        // joao: alterado o tipo de dado para double

        [Required, StringLength(50)]
        public string ExpirationDate { get; set; }

        public UpdateKitDTO(int id, string name, string productClass, double price, string expirationDate)
        {
                Id = id;
                Name = name;
                ProductClass = productClass;
                Price = price;
                ExpirationDate = expirationDate;
        }
    }
}
