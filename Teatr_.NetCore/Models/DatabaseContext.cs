using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Teatr.Models;
namespace Teatr.Models
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Image> Images { get; set; }
        public DbSet<Histonic> Histonics{ get; set; }
        public DbSet<DateHistonic> Dates { get; set; }
        public DatabaseContext(DbContextOptions<DatabaseContext> options):base(options) 
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Image>().HasData(new Image[]
            {
                new Image(){ ImageId=1, Title="Test", Path = "Content/Image/1.png",UsedFor="Main" },
                new Image(){ ImageId=2, Title="Test", Path = "Content/Image/2.png",UsedFor="Main" },
                new Image(){ ImageId=3, Title="Test", Path = "Content/Image/3.png",UsedFor="Promotion" },
                new Image(){ ImageId=4, Title="Test", Path = "Content/Image/25.jpg",UsedFor="Promotion" }
            });

            modelBuilder.Entity<DateHistonic>().HasData(new DateHistonic[] {
                new DateHistonic(){ DateHistonicId = 1,Time = DateTime.Now}
            });
        }
    }
}
