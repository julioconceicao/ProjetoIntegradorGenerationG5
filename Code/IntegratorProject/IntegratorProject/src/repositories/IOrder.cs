using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using System.Collections.Generic;

/// <summary>
/// <para>Resume> Created interface iOrder</para>
/// <para>By: Lethicya Lopes and Matheus Rodrigues</para>
/// <para>v 1.0</para>
/// <para>Date: 05/05/2022</para>
/// </summary>
 

namespace IntegratorProject.src.repositories
{
    public interface IOrder
    {
        List<OrderModel> GetAllOrders();
        OrderModel GetOrderById(int id);
        void AddNewOrder(NewOrderDTO order);
    }
}
