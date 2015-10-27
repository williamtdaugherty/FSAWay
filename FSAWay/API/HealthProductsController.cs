using FsaWayApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FsaWayApp.API
{
    public class HealthProducts : ApiController
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        [Authorize]

        public ICollection<HealthProduct> Get()
        {
            var healthproduct = (from h in _db.HealthProducts select h).ToList();
            return healthproduct;
        }

    }
}
