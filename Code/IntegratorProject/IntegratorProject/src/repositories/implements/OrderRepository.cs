using IntegratorProject.src.data;
using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using System.Collections.Generic;
using System.Linq;

namespace IntegratorProject.src.repositories.implements
{
    /// <summary>
    /// <para>Resume> Created Order repository</para>
    /// <para>By: Lethicya Lopes and Matheus Rodrigues</para>
    /// <para>v 1.0</para>
    /// <para>Date: 05/05/2022</para>
    /// </summary>
    public class OrderRepository : IOrder
    {
        #region Attributes
        private readonly IntegratorProjectContext _context;
        #endregion Attributes

        #region Constructors
        public OrderRepository(IntegratorProjectContext context)
        {
            _context = context;
        }
        #endregion Constructors

        #region Methods
        public void AddNewOrder(NewOrderDTO order)
        {
            _context.Orders.Add(new OrderModel

            {
                Kit = _context.Kits.FirstOrDefault(k => k.Id == order.Kit),
                User = _context.Users.FirstOrDefault(u => u.Email == order.EmailCreator)
            }
            );
             _context.SaveChanges();
        }

        public List<OrderModel> GetAllOrders()
        {
            return _context.Orders.ToList();
        }

        public OrderModel GetOrderById(int id)
        {
            return _context.Orders.FirstOrDefault(u => u.Id == id);
        }
        #endregion Methods
    }
}
