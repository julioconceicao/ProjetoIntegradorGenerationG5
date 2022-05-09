using IntegratorProject.src.dtos;
using IntegratorProject.src.repositories;
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
        public IActionResult GetKitById([FromRoute] int idKit)
        {
            var kits = _repository.GetKitById(idKit);
            if (kits == null) return NotFound();
            return Ok(kits);
        }
        [HttpGet("search")]
        public IActionResult GetAllBySearch([FromQuery] string nameKit, string productClass, float price)
        {
            var list = _repository.GetAllBySearch(nameKit, productClass, price);
            if (list.Count < 1) return NoContent();
            return Ok(list);
        }
        [HttpGet]
        public IActionResult GetAllKits()
        {
            var list = _repository.GetAllKits();
            if (list.Count < 1) return NoContent();
            return Ok(list);
        }
        [HttpPost]
        public IActionResult NewKit([FromBody] NewKitDTO kit)
        {
            if (!ModelState.IsValid) return BadRequest();
            _repository.NewKit(kit);
            return Created($"api/Kits", kit);
        }
        [HttpPut]
        public IActionResult UpDatekit([FromBody] UpDateKitDTO kit)
        {
            if (!ModelState.IsValid) return BadRequest();
            _repository.UpDateKit(kit);
            return Ok(kit);
        }
        [HttpDelete("delete/{idKit}")]
        public IActionResult DeleteKit([FromRoute] int idkit)
        {
            _repository.DeleteKit(idkit);
            return NoContent();
        }
        #endregion Methods
    }
}
