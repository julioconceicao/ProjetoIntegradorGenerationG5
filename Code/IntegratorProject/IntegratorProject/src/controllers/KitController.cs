﻿using IntegratorProject.src.dtos;
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
        ///  Get All Kits by Search
        /// </summary>
        /// <param name="price">double</param>
        /// <param name="nameKit">string</param>
        /// <param name="productClass">string</param>
        /// <returns>ActionResult</returns>
        /// <response code="200">return ok </response>
        /// <response code="404">kit does not exist</response>
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(KitModel))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("search")]
        [Authorize]
        public async Task<ActionResult> GetAllBySearchAsync([FromQuery] double price, string nameKit, string productClass)
        {
            var list = await _repository.GetAllBySearchAsync(price, nameKit, productClass);
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
        /// Update Kit
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
        /// Delete kit
        /// </summary>
        /// <param name="id">int</param>
        /// <returns>ActionResult</returns>
        /// <response code="204">deleted kit </response>
        /// <response code="404">kit not found </response>
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [HttpDelete("delete/{id}")]
        [Authorize(Roles = "ADMIN")]
        public async Task<ActionResult> DeleteKitAsync([FromRoute] int id)
        {
            await _repository.DeleteKitAsync(id);
            return NoContent();
        }
        #endregion Methods
    }
}
