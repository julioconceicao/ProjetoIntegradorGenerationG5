using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using IntegratorProject.src.repositories;
using IntegratorProject.src.services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntegratorProject.src.controllers
{
    [ApiController]
    [Route("api/Users")]
    [Produces("application/json")]
    public class UserController : ControllerBase
    {
        #region Attributes

        private readonly IUser _repository;
        private readonly IAuthentication _services;

        #endregion Attributes

        #region Constructors
        public UserController(IUser repository, IAuthentication services)
        {
            _repository = repository;
            _services = services;
        }
        #endregion Constructors

        #region Methods

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> AddNewUserAsync([FromBody] NewUserDTO user)
        {
            if (!ModelState.IsValid) return BadRequest();
            
            try
            {
                await _services.CreateUserNotDuplicatedAsync(user);
                return Created($"api/Users", user);
            }
            catch(Exception ex)
            {
                return Unauthorized(ex.Message);
            }

        }

        [HttpPut]
        [Authorize(Roles = "USER, ADMIN, ONG")]
        public async Task<ActionResult> UpdateUserAsync([FromBody] UpdateUserDTO user)
        {
            if (!ModelState.IsValid) return BadRequest();

           await _repository.UpdateUserAsync(user);
                return Ok(user);
        }

        [HttpDelete("delete/{idUser}")]
        [Authorize(Roles = "ADMIN")]
        public async Task<ActionResult> DeleteUserAsync([FromRoute] int idUser)
        {
           await _repository.DeleteUserAsync(idUser);
            return NoContent();
        }

        [HttpGet]
        [Authorize(Roles = "USER, ADMIN")]
        public async Task<ActionResult> GetAllOngsAsync()
        {
            var list = await _repository.GetAllOngsAsync();
            if (list.Count < 1) return NoContent();
            return Ok(list);
        }

        [HttpGet("adress/{userAdress}")]
        [Authorize(Roles = "USER, ONG, ADMIN")]
        public async Task<ActionResult> GetUserByAdressAsync([FromRoute] string adress)
        {
            var user = await _repository.GetUserByAdressAsync(adress);

            if (user == null) return NotFound();
                return Ok(user);
        }
    
        [HttpGet("id/{idUser}")]
        [Authorize(Roles = "USER, ONG, ADMIN")]
        public async Task<ActionResult> GetUserByIdAsync([FromRoute]int idUser)
        {
            var user = await _repository.GetUserByIdAsync(idUser);

            if (user == null) return NotFound();
                return Ok(user);
        }
        #endregion Methods
    }
}
