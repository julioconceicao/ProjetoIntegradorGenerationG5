using IntegratorProject.src.dtos;
using IntegratorProject.src.repositories;
using Microsoft.AspNetCore.Authorization;
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

        [HttpGet("id/{idKit}")]
        [Authorize]
        public async Task<ActionResult> GetKitByIdAsync([FromRoute] int idKit)
        {
            var kits = await _repository.GetKitByIdAsync(idKit);
            if (kits == null) return NotFound();
            return Ok(kits);
        }
        [HttpGet("search")]
        [Authorize]
        public async Task<ActionResult> GetAllBySearchAsync([FromQuery] string nameKit, string productClass, double price)
        {
            var list = await _repository.GetAllBySearchAsync(nameKit, productClass, price);
            if (list.Count < 1) return NoContent();
            return Ok(list);
        }
        [HttpGet]
        [Authorize]
        public async Task<ActionResult> GetAllKitsAsync()
        {
            var list = await _repository.GetAllKitsAsync();
            if (list.Count < 1) return NoContent();
            return Ok(list);
        }
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
        public async Task<ActionResult> UpDatekitAsync([FromBody] UpdateKitDTO kit)
        {
            if (!ModelState.IsValid) return BadRequest();
            await _repository.UpDateKitAsync(kit);
            return Ok(kit);
        }
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
