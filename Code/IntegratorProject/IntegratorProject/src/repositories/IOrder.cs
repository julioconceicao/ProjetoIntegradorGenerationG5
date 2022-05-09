using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using System.Collections.Generic;

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
        List<OrderModel> GetAllOrders();
        OrderModel GetOrderById(int id);
        void AddNewOrder(NewOrderDTO order);
    }
}
