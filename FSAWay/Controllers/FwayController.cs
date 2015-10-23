using FSAWay.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FSAWay.Controllers
{
    public class FwayController : ApiController
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        public IEnumerable<HealthProduct> Get()
        {
            return _db.HealthProducts.ToList();

        }
        }
}

