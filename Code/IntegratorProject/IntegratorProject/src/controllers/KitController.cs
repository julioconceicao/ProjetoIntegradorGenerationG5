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
    [Route("api/Kit")]
    [Produces("application/json")]
    public class KitController : ControllerBase
    {
        #region Attributes

        private readonly IKit _repository;

        #endregion Attributes

        #region Constructors

        public KitController(IKit repository)
        {
            _repository = repository;
        }

        #endregion Constructors

        #region Methods

        /// <summary>
        /// Get Kit By Id 
        /// </summary>
        /// <param name="idKit">int</param>
        /// <returns>ActionResult</returns>
        /// <response code="200">Returns the Kit</response>
        /// <response code="404">Kit not existing</response>
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(KitModel))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("id/{idKit}")]
        [Authorize]
        public async Task<ActionResult> GetKitByIdAsync([FromRoute] int idKit)
        {
            var kits = await _repository.GetKitByIdAsync(idKit);
            if (kits == null) return NotFound();
            return Ok(kits);
        }
        /// <summary>
        /// Get All By Search
        /// </summary>
        /// <param name="nameKit">int</param>
        /// <param name="productClass">int</param>
        /// <param name="price">int</param>
        /// <returns>ActionResult</returns>
        /// <response code="200">Returns list the Kits</response>
        /// <response code="204">Kit not existing</response>
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(KitModel))]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [HttpGet("search")]
        [Authorize]
        public async Task<ActionResult> GetAllBySearchAsync([FromQuery] string nameKit, string productClass, double price)
        {
            var list = await _repository.GetAllBySearchAsync(nameKit, productClass, price);
            if (list.Count < 1) return NoContent();
            return Ok(list);
        }
        /// <summary>
        /// Get All Kits 
        /// </summary>
        /// <returns>ActionResult</returns>
        /// <response code="200">Kit List</response>
        /// <response code="204">Empty List</response>
        [HttpGet]
        [Authorize]
        public async Task<ActionResult> GetAllKitsAsync()
        {
            var list = await _repository.GetAllKitsAsync();
            if (list.Count < 1) return NoContent();
            return Ok(list);
        }
        /// <summary>
        /// New Kit
        /// </summary>
        /// <param name="kit">NewKitDTO</param>
        /// <returns>ActionResult</returns>
        /// <remarks>
        /// Exemplo de requisição:
        ///
        ///     POST /api/Users
        ///     {
        ///        "name": "Kit Women",
        ///        "productClass": "food",
        ///        "price": "80.00",
        ///        "expirationDate": "20/05/2024",
        ///     }
        ///
        /// </remarks>
        /// <response code="201">Kit created</response>
        /// <response code="400">request error</response>
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(UserModel))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpPost]
        [Authorize(Roles = "ADMIN")]
        public async Task<ActionResult> NewKitAsync([FromBody] NewKitDTO kit)
        {
            if (!ModelState.IsValid) return BadRequest();
            await _repository.NewKitAsync(kit);
            return Created($"api/Kits", kit);
        }
        [HttpPut]
        [Authorize(Roles = "ADMIN")]
        public async Task<ActionResult> UpdatekitAsync([FromBody] UpdateKitDTO kit)
        {
            if (!ModelState.IsValid) return BadRequest();
            await _repository.UpdateKitAsync(kit);
            return Ok(kit);
        }
        /// <summary>
        /// Delete Kit
        /// </summary>
        /// <param name="idkit">int</param>
        /// <returns>ActionResult</returns>
        /// <response code="204">deleted kit</response>
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [HttpDelete("delete/{idKit}")]
        [Authorize(Roles = "ADMIN")]
        public async Task<ActionResult> DeleteKitAsync([FromRoute] int idkit)
        {
            await _repository.DeleteKitAsync(idkit);
            return NoContent();
        }
        #endregion Methods
    }
}
