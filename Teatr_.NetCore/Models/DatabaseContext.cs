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
        public DbSet<TypeHistonic> TypeHistonics { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<Histonic> Histonics{ get; set; }
        public DbSet<DateHistonic> Dates { get; set; }
        public DatabaseContext(DbContextOptions<DatabaseContext> options):base(options) 
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Image>().HasMany(p => p.Preview).WithOne(p => p.Preview);
            modelBuilder.Entity<Image>().HasMany(p => p.Histonics).WithMany(p => p.Images);
            modelBuilder.Entity<Histonic>().HasOne(p => p.Type).WithMany(p => p.Histonics);

            modelBuilder.Entity<Image>().HasData(new Image[]
            {
                new Image(){ ImageId=1, Title="Test", Path = "Content/Image/1.png",UsedFor="Main" },
                new Image(){ ImageId=2, Title="Test", Path = "Content/Image/2.png",UsedFor="Main" },
                new Image(){ ImageId=3, Title="Test", Path = "Content/Image/3.png",UsedFor="Promotion" },
                new Image(){ ImageId=4, Title="Test", Path = "Content/Image/25.jpg",UsedFor="Promotion" },
                new Image(){ ImageId=5, Title="Test", Path = "Content/Image/zavtra.jpg",UsedFor="Histonic" }
            });

            modelBuilder.Entity<Histonic>().HasData(new Histonic[]
            {
                new Histonic(){HistonicId = 1, Name = "Test", Description = "Lorem ipsum dolor sit amet," +
                " consectetur adipiscing elit. In id odio sed quam ultricies vehicula. Class aptent taciti" +
                " sociosqu ad litora torquent per conubia nostra.", PreviewId = 5,TypeId=1}
            });

            modelBuilder.Entity<DateHistonic>().HasData(new DateHistonic[] {
                new DateHistonic(){ DateHistonicId = 1,Time = DateTime.Now}
            });

            modelBuilder.Entity<TypeHistonic>().HasData(new TypeHistonic[]
            {
                new TypeHistonic(){TypeHistonicId = 1,Name="Большая сцена"},
                new TypeHistonic(){TypeHistonicId = 2,Name="Малая сцена"},
                new TypeHistonic(){TypeHistonicId = 3,Name="Для детей"},

            });
        }
    }
}
