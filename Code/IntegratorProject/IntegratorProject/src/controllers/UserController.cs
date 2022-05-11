using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using IntegratorProject.src.repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace IntegratorProject.src.controllers
{
    [ApiController]
    [Route("api/User")]
    [Produces("application/json")]
    public class UserController : ControllerBase
    {
        #region Attributes

        private readonly IUser _repository;

        #endregion Attributes

        #region Constructors
        public UserController(IUser repository)
        {
            _repository = repository;
        }
        #endregion Constructors

        #region Methods

        [HttpPost]
        [AllowAnonymous]
        public IActionResult NewUser([FromBody] NewUserDTO user)
        {
            if (!ModelState.IsValid) return BadRequest();
            _repository.AddNewUser(user);
            return Created($"api/Users/{user.Email}", user);
        }

        [HttpPut]
        [Authorize(Roles = "USER, ADMIN, ONG")]
        public IActionResult UpDateUser([FromBody] UpDateUserDTO user)
        {
            if (!ModelState.IsValid) return BadRequest();

            _repository.UpDateUser(user);

            return Ok(user);
        }

        [HttpDelete("delete/{idUser}")]
        [Authorize(Roles = "USER, ADMIN, ONG")]
        public IActionResult DeleteUser([FromRoute] int idUser)
        {
            _repository.DeleteUser(idUser);

            return NoContent();
        }

        [HttpGet]
        [Authorize(Roles = "USER")]
        public IActionResult GetAllOngs()
        {
            var list = _repository.GetAllOngs();
            if (list.Count < 1) return NoContent();
            return Ok(list);
        }

        [HttpGet("adress/{userAdress}")]
        [Authorize(Roles = "USER, ONG")]
        public IActionResult GetUserByAdress([FromRoute] string adress)
        {
            var user = _repository.GetUserByAdress(adress);

            if (user == null) return NotFound();

            return Ok(user);
        }
    
        [HttpGet("id/{idUser}")]
        [Authorize(Roles = "USER, ONG")]
        public IActionResult GetUserById([FromRoute]int idUser)
        {
            var user = _repository.GetUserById(idUser);

            if (user == null) return NotFound();

            return Ok(user);
        }
        #endregion Methods

    }
}
