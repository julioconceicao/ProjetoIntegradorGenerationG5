using IntegratorProject.src.dtos;
using IntegratorProject.src.repositories;
using Microsoft.AspNetCore.Mvc;

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
        public IActionResult NewUser([FromBody] NewUserDTO user)
        {
            if (!ModelState.IsValid) return BadRequest();
            _repository.AddNewUser(user);
            return Created($"api/Users/{user.Email}", user);
        }

        [HttpPut]
        public IActionResult UpDateUser([FromBody] UpDateUserDTO user)
        {
            if (!ModelState.IsValid) return BadRequest();

            _repository.UpDateUser(user);

            return Ok(user);
        }

        [HttpDelete("delete/{idUser}")]
        public IActionResult DeleteUser([FromRoute] int idUser)
        {
            _repository.DeleteUser(idUser);

            return NoContent();
        }


        #endregion Methods


    }
}
