using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IntegratorProject.src.repositories
{
    /// <summary>
    /// <para>Resume> Created interface iOrder</para>
    /// <para>By: Lethicya Lopes and Matheus Rodrigues</para>
    /// <para>v 1.0</para>
    /// <para>Date: 05/05/2022</para>
    /// </summary>
    public interface IOrder
    {
        Task<List<OrderModel>> GetAllOrdersAsync();
        Task<OrderModel> GetOrderByIdAsync(int id);
        Task AddNewOrderAsync(NewOrderDTO order);
    }
}
