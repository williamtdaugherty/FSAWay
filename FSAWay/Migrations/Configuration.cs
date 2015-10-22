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

            var HealthProduct = new HealthProducts[]
            {
                new HealthProducts {Name="Iodine", Qualifies=true },
                new HealthProducts {Name="Finger Splint", Qualifies=true },
                new HealthProducts {Name="Energy Water", Qualifies=false },
                new HealthProducts {Name="Stool Softener", Qualifies=true },
                new HealthProducts {Name="Lip Balm", Qualifies=true },
                new HealthProducts {Name="Shower Stool", Qualifies=true },
                new HealthProducts {Name="Diabetes Meter", Qualifies=true },
                new HealthProducts {Name="Nasal Drops", Qualifies=true },
                new HealthProducts {Name="Tweezers", Qualifies=true },
                new HealthProducts {Name="Antacid Tablets", Qualifies=true },
                new HealthProducts {Name="Itch Lotion", Qualifies=true },
                new HealthProducts {Name="Dental Floss", Qualifies=false },
            };

            context.HealthProducts.AddOrUpdate(h => h.Name, HealthProduct);


        }
    }
}
