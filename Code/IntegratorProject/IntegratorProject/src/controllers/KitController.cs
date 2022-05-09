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
        public IActionResult GetKitById([FromRoute]int id)
        {
           var kits = _repository.GetKitById(id);
           if (kits == null) return NotFound();
           return Ok(kits);
        }
        [HttpGet]
        public IActionResult GetAllBySearch([FromQueryAttribute] string nameKit, string productClass, float price)
        { 
        var kits = _repository.GetAllBySearch(nameKit, productClass, price);
            if (kits.Count < 1) return NoContent();
            return Ok(kits);
        }

        #endregion Methods


    }
}
