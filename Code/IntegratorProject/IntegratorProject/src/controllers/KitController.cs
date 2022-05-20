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
        ///  Get kit by ID
        /// </summary>
        /// <param name="idKit">int</param>
        /// <returns>ActionResult</returns>
        /// <response code="200">return ok </response>
        /// <response code="404">kit not existing</response>
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
        ///  Get kit by ID
        /// </summary>
        /// <param name="nameKit">int</param>
        /// <param name="productClass">int</param>
        /// <param name="price">int</param>
        /// <returns>ActionResult</returns>
        /// <response code="200">return ok </response>
        /// <response code="404">kit does not exist</response>
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(KitModel))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("search")]
        [Authorize]
        public async Task<ActionResult> GetAllBySearchAsync([FromQuery] string nameKit, string productClass, double price)
        {
            var list = await _repository.GetAllBySearchAsync(nameKit, productClass, price);
            if (list.Count < 1) return NoContent();
            return Ok(list);
        }

        /// <summary>
        ///  Get All Kits
        /// </summary>
        /// <returns>ActionResult</returns>
        /// <response code="200">return ok </response>
        /// <response code="404">kit does not exist</response>
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(KitModel))]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [HttpGet]
        [Authorize]
        public async Task<ActionResult> GetAllKitsAsync()
        {
            var list = await _repository.GetAllKitsAsync();
            if (list.Count < 1) return NoContent();
            return Ok(list);
        }

        /// <summary>
        /// Created New Kit
        /// </summary>
        /// <param nome="kit">NewkitDTO</param>  
        /// <returns>ActionResult</returns>
        /// <remarks>
        /// requisition example:
        ///
        ///     POST /api/kits
        ///     {
        ///        "name": "Women Kit"
        ///        "productClass": "Female kit"
        ///        "price": "00,00"
        ///        "expirationDate": "00,00"
        ///     }
        ///     
        /// </remarks>
        /// <response code="200">Returns updated user</response>
        /// <response code="400">Requisition error</response>
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(KitModel))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpPost]
        [Authorize(Roles = "ADMIN")]
        public async Task<ActionResult> NewKitAsync([FromBody] NewKitDTO kit)
        {
            if (!ModelState.IsValid) return BadRequest();
            await _repository.NewKitAsync(kit);
            return Created($"api/Kits", kit);
        }

        /// <summary>
        ///  Method for update new user
        /// </summary>
        /// <param name="kit">UpdateKitDTO</param>
        /// <returns>ActionResult</returns>
        /// <remarks>
        /// requisition example:
        /// 
        ///     PUT / api/Kits
        ///     {
        ///         id: "1"
        ///         name: "Kit"
        ///         productClass: "female"
        ///         price: "00,00"
        ///         expirationDate: "18/05/2022"
        ///     }
        ///     
        /// </remarks>
        /// <response code="204">deleted kit </response>
        /// <response code="404">kit not found </response>
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(KitModel))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpPut]
        [Authorize(Roles = "ADMIN")]
        public async Task<ActionResult> UpdatekitAsync([FromBody] UpdateKitDTO kit)
        {
            if (!ModelState.IsValid) return BadRequest();
            await _repository.UpdateKitAsync(kit);
            return Ok(kit);
        }

        /// <summary>
        ///  Method for delete kit
        /// </summary>
        /// <param name="idkit">int</param>
        /// <returns>ActionResult</returns>
        /// <response code="204">deleted kit </response>
        /// <response code="404">kit not found </response>
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
