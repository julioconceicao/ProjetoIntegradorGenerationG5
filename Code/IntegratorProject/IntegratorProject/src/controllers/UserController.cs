using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using IntegratorProject.src.repositories;
using IntegratorProject.src.services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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

        /// <summary>
        /// Create a new user
        /// </summary>
        /// <param name="user">NewUserDTO</param>
        /// <returns>ActionResult</returns>
        /// <remarks>
        /// Example:
        ///
        ///     POST /api/Users
        ///     {
        ///        "name": "Julinho Lindo",
        ///        "cpf_cnpj": "42282758010"
        ///        "email": "juju@domain.com",
        ///        "password": "134652",
        ///        "adress": "Av. Paulista",
        ///        "NameAgent": " "
        ///        "type": "NORMAL"
        ///     }
        ///
        /// </remarks>
        /// <response code="201">Returns created user</response>
        /// <response code="400">Requisition error</response>
        /// <response code="401">Email already signed in</response>
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(UserModel))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
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

        /// <summary>
        /// Update User
        /// </summary>
        /// <param name="user">UpdateUserDTO</param>
        /// <returns>ActionResult</returns>
        /// <remarks>
        /// Example:
        ///
        ///     PUT /api/Users
        ///     {
        ///        "id": 1,    
        ///        "nome": "José Vinicius",
        ///        "cpf_cnpj": "43328758010"
        ///        "email": "julio@outlook.com"
        ///        "password": "134652",
        ///        "adress": "Mauá"
        ///        "nameAgent": " "
        ///     }
        ///
        /// </remarks>
        /// <response code="200">Returns updated user</response>
        /// <response code="400">Requisition error</response>
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpPut]
        [Authorize(Roles = "USER, ADMIN, ONG")]
        public async Task<ActionResult> UpdateUserAsync([FromBody] UpdateUserDTO user)
        {
            if (!ModelState.IsValid) return BadRequest();

           await _repository.UpdateUserAsync(user);
                return Ok(user);
        }

        /// <summary>
        /// Delete user by Id
        /// </summary>
        /// <param name="idUser">int</param>
        /// <returns>ActionResult</returns>
        /// <response code="204">User deleted</response>
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [HttpDelete("delete/{idUser}")]
        [Authorize(Roles = "ADMIN")]
        public async Task<ActionResult> DeleteUserAsync([FromRoute] int idUser)
        {
           await _repository.DeleteUserAsync(idUser);
            return NoContent();
        }

        /// <summary>
        /// Get all Ongs
        /// </summary>
        /// <returns>ActionResult</returns>
        /// <response code="200">Returns list</response>
        /// <response code="204">Empty list</response>
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserModel))]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [HttpGet]
        [Authorize(Roles = "USER, ADMIN")]
        public async Task<ActionResult> GetAllOngsAsync()
        {
            var list = await _repository.GetAllOngsAsync();
            if (list.Count < 1) return NoContent();
            return Ok(list);
        }

        /// <summary>
        /// Get User By Address
        /// </summary>
        /// <param name="adress">string</param>
        /// <returns>ActionResult</returns>
        /// <response code="200">Returns user</response>
        /// <response code="404">Email not found</response>
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserModel))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("adress/{userAdress}")]
        [Authorize(Roles = "USER, ONG, ADMIN")]
        public async Task<ActionResult> GetUserByAdressAsync([FromRoute] string adress)
        {
            var user = await _repository.GetUserByAdressAsync(adress);

            if (user == null) return NotFound();
                return Ok(user);
        }
    
        /// <summary>
        /// Get User By Id
        /// </summary>
        /// <param name="idUser">int</param>
        /// <returns>ActionResult</returns>
        /// <response code="200">Returns user</response>
        /// <response code="404">User not found</response>
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserModel))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
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
