using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using IntegratorProject.src.repositories;
using IntegratorProject.src.services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace IntegratorProject.src.controllers
{
    [ApiController]
    [Route("api/Users")]
    [Produces("application/json")]
    public class UserController : ControllerBase
    {
        #region Attributes

        private readonly IUser _repository;
        private readonly IAuthentication _services;  // não havia o atributo autenticação para proteger o método de criação de usuário

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
        public IActionResult NewUser([FromBody] NewUserDTO user)
        {
            if (!ModelState.IsValid) return BadRequest();

            try
            {
                _services.CreateUserNotDuplicated(user);
                return Created($"api/Users/{user.Email}", user);
            }
            catch (Exception ex)
            {
                return Unauthorized(ex.Message);
            }
        }

        [HttpPut]
        [Authorize(Roles = "USER, ADMIN, ONG")]
        public IActionResult UpdateUser([FromBody] UpdateUserDTO user)
        {
            if (!ModelState.IsValid) return BadRequest();

            _repository.UpdateUser(user);
                return Ok(user);
        }

        [HttpDelete("delete/{idUser}")]
        [Authorize(Roles = "ADMIN")]  // apenas admin deve ser capaz de acessar este método, alterado para ADMIN
        public IActionResult DeleteUser([FromRoute] int idUser)
        {
            _repository.DeleteUser(idUser);
            return NoContent();
        }

        [HttpGet]
        [Authorize(Roles = "USER, ADMIN")] // seria interessante o administrador também ter acesso a este método, add ADMIN
        public IActionResult GetAllOngs()
        {
            var list = _repository.GetAllOngs();
            if (list.Count < 1) return NoContent();
            return Ok(list);
        }

        [HttpGet("adress/{userAdress}")]
        [Authorize(Roles = "USER, ONG, ADMIN")]
        public IActionResult GetUserByAdress([FromRoute] string adress)
        {
            var user = _repository.GetUserByAdress(adress);

            if (user == null) return NotFound();
                return Ok(user);
        }
    
        [HttpGet("id/{idUser}")]
        [Authorize(Roles = "USER, ONG, ADMIN")]
        public IActionResult GetUserById([FromRoute]int idUser)
        {
            var user = _repository.GetUserById(idUser);

            if (user == null) return NotFound();
                return Ok(user);
        }
        #endregion Methods
    }
}
