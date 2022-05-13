using IntegratorProject.src.data;
using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

        /// <summary>
        /// <para>Resume: Asynchronous Method to Add a New Order</para>
        /// </summary>
        /// <param name="order">OrderDTO</param>
        public async Task AddNewOrderAsync(NewOrderDTO order)
        {
            await _context.Orders.AddAsync(new OrderModel
            {
                Kit = await _context.Kits.FirstOrDefaultAsync(k => k.Id == order.IdKit),
                User = await _context.Users.FirstOrDefaultAsync(u => u.Email == order.EmailCreator)
            });
            await _context.SaveChangesAsync();
        }

        /// <summary>
        /// <para>Resume: Asynchronous Method to Get All Orders</para>
        /// </summary>
        /// <param name="idOrder">int</param>
        public async Task<List<OrderModel>> GetAllOrdersAsync()
        {
            return await _context.Orders.ToListAsync();
        }

        /// <summary>
        /// <para>Resume: Asynchronous Method to Get Order by Id</para>
        /// </summary>
        /// <param name="idOrder">int</param>
        public async Task<OrderModel> GetOrderByIdAsync(int id)
        {
            return await _context.Orders.FirstOrDefaultAsync(u => u.Id == id);
        }
        #endregion Methods
    }
}

