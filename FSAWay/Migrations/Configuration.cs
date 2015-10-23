namespace FSAWay.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<FSAWay.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(FSAWay.Models.ApplicationDbContext context)
        {

            var healthProducts = new HealthProduct[]
            {
                new HealthProduct {ProductName="Iodine", Qualifies=true },
                new HealthProduct {ProductName="Finger Splint", Qualifies=true },
                new HealthProduct {ProductName="Energy Water", Qualifies=false },
                new HealthProduct {ProductName="Stool Softener", Qualifies=true },
                new HealthProduct {ProductName="Lip Balm", Qualifies=true },
                new HealthProduct {ProductName="Shower Stool", Qualifies=true },
                new HealthProduct {ProductName="Diabetes Meter", Qualifies=true },
                new HealthProduct {ProductName="Nasal Drops", Qualifies=true },
                new HealthProduct {ProductName="Tweezers", Qualifies=true },
                new HealthProduct {ProductName="Antacid Tablets", Qualifies=true },
                new HealthProduct {ProductName="Itch Lotion", Qualifies=true },
                new HealthProduct {ProductName="Dental Floss", Qualifies=false },
            };

            context.HealthProducts.AddOrUpdate(h => h.ProductName, healthProducts);


        }
    }
}
