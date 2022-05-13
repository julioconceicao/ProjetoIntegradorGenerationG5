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
        /// Add New Order
        /// </summary>
        /// <param name="order">OrderDTO</param>
        /// <returns>ActionResult</returns>
        /// <response code="201">Order created</response>
        /// <response code="400">Request error</response>
        /// <response code="401">Order already created</response>
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(OrderModel))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [HttpPost]
        [Authorize(Roles = "ADMIN, USER")]
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
        /// Get all Orders
        /// </summary>
        /// <param name="idOrder">int</param>
        /// <returns>ActionResult</returns>
        /// <response code="200">Return list???????????</response>
        /// <response code="204">No Content</response>
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(OrderModel))]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [HttpGet]
        [Authorize]
        public async Task<List<OrderModel>> GetAllOrdersAsync()
        {
            return await _context.Orders.ToListAsync();
        }

        /// <summary>
        /// Get Order by Id
        /// </summary>
        /// <param name="idOrder">int</param>
        /// <returns>ActionResult</returns>
        /// <response code="200">Return Order</response>
        /// <response code="404">Order not found</response>
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(OrderModel))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("id/{idOrder}")]
        [Authorize]
        public async Task<OrderModel> GetOrderByIdAsync(int id)
        {
            return await _context.Orders.FirstOrDefaultAsync(u => u.Id == id);
        }
        #endregion Methods
    }
}

