using IntegratorProject.src.data;
using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
        public async Task AddNewOrderAsync(NewOrderDTO order)
        {
           await _context.Orders.AddAsync(new OrderModel
            {
                Kit = _context.Kits.FirstOrDefault(k => k.Id == order.Kit),
                User = _context.Users.FirstOrDefault(u => u.Email == order.EmailCreator)
<<<<<<< HEAD
            }
            );
             await _context.SaveChangesAsync();
=======
            });
           await _context.SaveChangesAsync();
>>>>>>> 1ecfb92effc792294e58f118aa9d6dd472c39b3a
        }
            
        public async Task<List<OrderModel>>GetAllOrdersAsync()
        {
            return await _context.Orders.ToListAsync();
        }

        public async Task<OrderModel> GetOrderByIdAsync(int id)
        {
            return await _context.Orders.FirstOrDefaultAsync(u => u.Id == id);
        }
        #endregion Methods
    }
}
