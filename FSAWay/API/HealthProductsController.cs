using FsaWayApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FsaWayApp.API
{
    public class HealthProductsController : ApiController
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        [Authorize]


        public ICollection<HealthProduct> Get()
        {
            var healthproduct = (from h in _db.HealthProducts select h).ToList();
            return healthproduct;
        }


        public IHttpActionResult Post(HealthProduct healthproduct)
        {
            if (healthproduct == null)
            {
                return BadRequest("Product missing");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (healthproduct.Id == 0)
            {

                _db.HealthProducts.Add(healthproduct);
                _db.SaveChanges();
                return Created("/healthproducts/" + healthproduct.Id, healthproduct);

            }
            else
            {
                return BadRequest("editing");
            }

        }
    }

}