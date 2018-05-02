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
                    return; // DB has been seeded
                }

                context.Products.AddRange(
                    new Product
                    {
                        name = "Azurite Gem",
                        description =
                            "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
                        shine = 8,
                        price = 110.50M,
                        rarity = 7,
                        color = "#CCC",
                        faces = 14,
                        images = new List<Image>
                        {
                            new Image {imageUrl = "wwwroot/images/gem-02.gif"},
                            new Image {imageUrl = "wwwroot/images/gem-05.gif"},
                            new Image {imageUrl = "wwwroot/images/gem-09.gif"},
                        },
                        reviews = new List<Review>
                        {
                            new Review
                            {
                                author = "joe@example.org",
                                body = "I love this gem!",
                                createdOn = "Apr 04, 2018",
                                stars = 5
                            },
                            new Review
                            {
                                author = "tim@example.org",
                                body = "This gem sucks.",
                                createdOn = "Apr 04, 2018",
                                stars = 1
                            },
                            new Review
                            {
                                author = "cmpickle@gmail.com",
                                body = "test",
                                createdOn = "Apr 04, 2018",
                                stars = 5
                            },
                        }
                    },
                    new Product
                    {
                        name = "Bloddstone Gem",
                        description =
                            "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
                        shine = 9,
                        price = 22.90M,
                        rarity = 6,
                        color = "#EEE",
                        faces = 12,
                        images = new List<Image>
                        {
                            new Image {imageUrl = "wwwroot/images/gem-01.gif"},
                            new Image {imageUrl = "wwwroot/images/gem-03.gif"},
                            new Image {imageUrl = "wwwroot/images/gem-04.gif"},
                        },
                        reviews = new List<Review>
                        {
                            new Review
                            {
                                author = "JimmyDean@example.org",
                                body = "I think this gem was just OK, could honestly use more shine, IMO.",
                                createdOn = "Apr 04, 2018",
                                stars = 3
                            },
                            new Review
                            {
                                author = "gemsRock@example.org",
                                body = "Any gem with 12 faces is for me!",
                                createdOn = "Apr 04, 2018",
                                stars = 4
                            },
                        }
                    },
                    new Product
                    {
                        name = "Zircon Gem",
                        description =
                            "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
                        shine = 70,
                        price = 1100.00M,
                        rarity = 2,
                        color = "#000",
                        faces = 6,
                        images = new List<Image>
                        {
                            new Image {imageUrl = "wwwroot/images/gem-02.gif"},
                            new Image {imageUrl = "wwwroot/images/gem-05.gif"},
                            new Image {imageUrl = "wwwroot/images/gem-09.gif"},
                        },
                        reviews = new List<Review>
                        {
                            new Review
                            {
                                author = "turtleguyy@example.org",
                                body = "This gem is WAY too expensive for its rarity value.",
                                createdOn = "Apr 04, 2018",
                                stars = 1
                            },
                            new Review
                            {
                                author = "LouisW407@example.org",
                                body = "BBW: High Shine != High Quality.",
                                createdOn = "Apr 04, 2018",
                                stars = 1
                            },
                            new Review
                            {
                                author = "nat@example.org",
                                body = "Don't waste your rubles!",
                                createdOn = "Apr 04, 2018",
                                stars = 1
                            },
                        }
                    }

                );
                context.Notes.AddRange(
                    new Note
                    {
                        Title = "Hello World!",
                        Description = "A note to greet the whole world!",
                    },
                    new Note
                    {
                        Title = "NULL",
                        Description = "nothing to see here, move along...",
                    }
                );


            context.SaveChanges();
            }
        }
    }
}
