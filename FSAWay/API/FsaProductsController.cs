using FSAWay.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FSAWay.API
{
    public class FsaProductsController: ApiController
    {
        public IEnumerable<HealthProducts> Get()
        {
            return new List<HealthProducts>

            {
                new HealthProducts {Id=1, Name="Diapers", Qualifies=true },
                new HealthProducts {Id=2, Name="Eye Drops", Qualifies=true },
                new HealthProducts {Id=3, Name="Nail Clippers", Qualifies=false },
                new HealthProducts {Id=4, Name="Rash Ointment", Qualifies=true },
                new HealthProducts {Id=5, Name="Anti-Bacterial Spray", Qualifies=true },
                new HealthProducts {Id=6, Name="Gauze", Qualifies=true },
                new HealthProducts {Id=7, Name="Hair Clip", Qualifies=false },
                new HealthProducts {Id=8, Name="Bunion Remover", Qualifies=true },
                new HealthProducts {Id=9, Name="Talc Powder", Qualifies=true },
                new HealthProducts {Id=10, Name="Cough Drops", Qualifies=true },
                new HealthProducts {Id=11, Name="Toilet Paper", Qualifies=false },
                new HealthProducts {Id=12, Name="Acne Gel", Qualifies=true },
                new HealthProducts {Id=13, Name="Lice Remover", Qualifies=true },
                new HealthProducts {Id=14, Name="Light Bulbs", Qualifies=false },
                new HealthProducts {Id=15, Name="Calamide", Qualifies=true },


            };


    }

    }
}
