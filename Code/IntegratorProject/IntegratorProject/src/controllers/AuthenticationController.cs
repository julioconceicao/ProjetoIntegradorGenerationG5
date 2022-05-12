using IntegratorProject.src.dtos;
using IntegratorProject.src.services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace IntegratorProject.src.controllers
{
    /// <summary>
    /// <para>Created the Authentication Controller</para>
    /// <para>By:Julio Conceição</para>
    /// <para>Version: 1.0</para>
    /// <para>04/05/2022</para>
    /// </summary>
    [ApiController]
    [Route("api/Authentication")]
    [Produces("application/json")]
    public class AuthenticationController : ControllerBase
    {
        #region Attributes

        private readonly IAuthentication _services;

        #endregion

        #region Constructor

        public AuthenticationController (IAuthentication services)
        {
            _services = services;
        }

        #endregion

        #region Methods

        [HttpPost, AllowAnonymous]
        public async Task<ActionResult> AuthenticationSync([FromBody] AuthenticateDTO authentication)
        {
            if (!ModelState.IsValid) return BadRequest();
            try
            {
                var authorization = await _services.GetAuthorizationAsync(authentication);
                return Ok(authorization);
            }
            catch (Exception ex)
            {
                return Unauthorized(ex.Message);
            }
        }

        #endregion
    }
}
