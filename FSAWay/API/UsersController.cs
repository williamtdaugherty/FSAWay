using FsaWayApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

namespace FsaWayApp.API
{
    public class UsersController : ApiController
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        [Authorize]
        public IHttpActionResult Get()
        {
            var users = (from u in _db.Users select u).ToList();
            return Ok(users);
          
        }
    }
}
