using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FsaWayApp.Models
{
    public class HealthProduct
    {

        public int Id { get; set; }
        public string Brand { get; set; }
        public string ProductName { get; set; }
        public string Manufacturer { get; set; }
        public decimal WholesalePrice { get; set; }
        public decimal CustomerPrice { get; set; }
        public string ProdCategory { get; set; }
        public bool Qualifies { get; set; }

    }
}