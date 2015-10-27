namespace FsaWayApp.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<FsaWayApp.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(FsaWayApp.Models.ApplicationDbContext context)
        {

            var healthProducts = new HealthProduct[]
            {
                new HealthProduct {Brand="Swan", ProductName="Iodine",Manufacturer="Swan Inc", WholesalePrice= .99m, CustomerPrice= 1.25m, ProdCategory="FirstAid",  Qualifies=true },
                new HealthProduct {Brand="Scunci", ProductName="Barrette 3-Ct",Manufacturer="Scunci Products", WholesalePrice= 1.37m, CustomerPrice= 3.20m, ProdCategory="Beauty",  Qualifies=false },
                new HealthProduct {Brand="Accu-Check Diabetes", ProductName="FastClix Lancing Kit",Manufacturer="Acu-Check", WholesalePrice= 10.99m, CustomerPrice= 12.25m, ProdCategory="Medical",  Qualifies=true },
                new HealthProduct {Brand="Advil", ProductName="Advil Allergy and Congestion Relief",Manufacturer="Advil Labs", WholesalePrice= 4.69m, CustomerPrice= 6.27m, ProdCategory="Medication",  Qualifies=true },
                new HealthProduct {Brand="Bacid", ProductName="Probiotic Dietary Supplement",Manufacturer="Bacid Ind.", WholesalePrice= 23.48m, CustomerPrice= 33.57m, ProdCategory="Personal Health",  Qualifies=false },
                new HealthProduct {Brand="Ace", ProductName="Therapeutic Arch Support",Manufacturer="Ace", WholesalePrice= 10.04m, CustomerPrice= 13.37m, ProdCategory="Personal Health",  Qualifies=true },


            };

            context.HealthProducts.AddOrUpdate(h => h.ProductName, healthProducts);


        }
    }
}
