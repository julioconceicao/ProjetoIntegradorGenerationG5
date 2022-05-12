using IntegratorProject.src.dtos;
using IntegratorProject.src.repositories;
using Microsoft.AspNetCore.Authorization;
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
        [HttpGet]
        [Authorize]
        public async Task<ActionResult> GetAllOrdersAsync()
        {
            var list = await _repository.GetAllOrdersAsync();
            if (list.Count < 1) return NoContent();
            return Ok(list);
        }

        [HttpGet("id/{idOrder}")]
        [Authorize]
        public async Task<ActionResult> GetOrderByIdAsync([FromRoute] int idOrder)
        {
            var order = await _repository.GetOrderByIdAsync(idOrder);
            if (order == null) return NotFound();
            return Ok(order);
        }

        [HttpPost]
        [Authorize(Roles = "ADMIN, USER")]                    //Este método deve ser acesso por Admin e user, estava apenas admin
        public IActionResult AddNewOrder([FromBody] NewOrderDTO order)
        {
            if (!ModelState.IsValid) return BadRequest();
            _repository.AddNewOrder(order);
                return Created($"api/orders", order);
        }
        #endregion
    }
}
