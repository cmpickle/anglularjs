using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace FlatlandersAPI.Models
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new MyDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<MyDbContext>>()))
            {
                // Look for any movies.
                if (context.Products.Any())
                {
                    return;   // DB has been seeded
                }

                context.Products.AddRange(
                    new Product
                    {
                        Name = "When Harry Met Sally",
                        Description = "This is a description",
                        Shine = 7,
                        Price = 7.99M,
                        Rarity = 5,
                        Color = "blue",
                        Faces = 3,
                        Images = new List<Image> { new Image { ImageUrl = "images/gem-01.gif"} },
                        Reviews = new List<Review> { new Review { Author = "Bob", Body = "Hello World", CreatedOn = "Apr 04, 2018", Stars = 5} }
                    }

                );
                context.SaveChanges();
            }
        }
    }
}
