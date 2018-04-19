using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FlatlandersAPI.Models
{
    public class Product
    {
        public string ProductID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Shine { get; set; }
        public Decimal Price { get; set; }
        public int Rarity { get; set; }
        public string Color { get; set; }
        public int Faces { get; set; }
        public ICollection<Image> Images { get; set; }
        public ICollection<Review> Reviews { get; set; }
    }
}
