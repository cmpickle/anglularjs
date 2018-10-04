using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlatlandersAPI.Models.reduxtagram;
using Microsoft.EntityFrameworkCore;

namespace FlatlandersAPI.Models
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<Note> Notes { get; set; }
        public DbSet<Category> Categories { get; set; }

        public DbSet<Comments> Coments { get; set; }
        public DbSet<Posts> Posts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasMany(p => p.reviews).WithOne(r => r.product);
            modelBuilder.Entity<Product>().HasMany(p => p.images).WithOne(i => i.product);

            modelBuilder.Entity<Posts>().HasMany(p => p.Comments).WithOne(c => c.post);
        }
    }
}
