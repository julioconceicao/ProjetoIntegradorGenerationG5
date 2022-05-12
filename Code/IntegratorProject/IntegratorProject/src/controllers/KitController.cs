using IntegratorProject.src.dtos;
using IntegratorProject.src.repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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
        public IActionResult GetKitById([FromRoute] int idKit)
        {
            var kits = _repository.GetKitById(idKit);
            if (kits == null) return NotFound();
            return Ok(kits);
        }
        [HttpGet("search")]
        [Authorize]
        public IActionResult GetAllBySearch([FromQuery] string nameKit, string productClass, double price)
        {
            var list = _repository.GetAllBySearch(nameKit, productClass, price);
            if (list.Count < 1) return NoContent();
            return Ok(list);
        }
        [HttpGet]
        [Authorize]
        public IActionResult GetAllKits()
        {
            var list = _repository.GetAllKits();
            if (list.Count < 1) return NoContent();
            return Ok(list);
        }
        [HttpPost]
        [Authorize(Roles = "ADMIN")]
        public IActionResult NewKit([FromBody] NewKitDTO kit)
        {
            if (!ModelState.IsValid) return BadRequest();
            _repository.NewKit(kit);
            return Created($"api/Kits", kit);
        }
        [HttpPut]
        [Authorize(Roles = "ADMIN")]
        public IActionResult UpDatekit([FromBody] UpdateKitDTO kit)
        {
            if (!ModelState.IsValid) return BadRequest();
            _repository.UpDateKit(kit);
            return Ok(kit);
        }
        [HttpDelete("delete/{idKit}")]
        [Authorize(Roles = "ADMIN")]
        public IActionResult DeleteKit([FromRoute] int idkit)
        {
            _repository.DeleteKit(idkit);
            return NoContent();
        }
        #endregion Methods
    }
}
