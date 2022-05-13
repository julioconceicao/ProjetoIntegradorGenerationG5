using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using IntegratorProject.src.repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace IntegratorProject.src.controllers
{
    [ApiController]
    [Route("api/Orders")]
    [Produces("application/json")]
    public class OrderController : ControllerBase
    {
        #region Atributes
        private readonly IOrder _repository;
        #endregion

        #region Builders
        public OrderController(IOrder repository)
        {
            _repository = repository;
        }
        #endregion

        #region Methods

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
        public async Task<ActionResult> GetAllOrdersAsync()
        {
            var list = await _repository.GetAllOrdersAsync();
            if (list.Count < 1) return NoContent();
            return Ok(list);
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
        public async Task<ActionResult> GetOrderByIdAsync([FromRoute] int idOrder)
        {
            var order = await _repository.GetOrderByIdAsync(idOrder);
            if (order == null) return NotFound();
            return Ok(order);
        }

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
        public async Task<ActionResult> AddNewOrderAsync([FromBody] NewOrderDTO order)
        {
            if (!ModelState.IsValid) return BadRequest();

            await _repository.AddNewOrderAsync(order);
            return Ok(order);
        }
        #endregion
    }
}
