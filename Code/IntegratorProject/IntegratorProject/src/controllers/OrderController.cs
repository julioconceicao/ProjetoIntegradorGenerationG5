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
<<<<<<< HEAD
        [Authorize(Roles = "ADMIN, USER")]                
        public async Task<ActionResult> AddNewOrderAsync([FromBody] NewOrderDTO order)
=======
        [Authorize(Roles = "ADMIN, USER")]    //Este método deve ser acesso por Admin e user, estava apenas admin
        public IActionResult AddNewOrder([FromBody] NewOrderDTO order)
>>>>>>> a60c39ed07b2cb7bf0cff9d968f74034021e7491
        {
            if (!ModelState.IsValid) return BadRequest();
            await _repository.AddNewOrderAsync(order);
                return Created($"api/orders", order);
        }
        #endregion
    }
}
