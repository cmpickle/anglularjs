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
        public string name { get; set; }
        public string description { get; set; }
        public int shine { get; set; }
        public Decimal price { get; set; }
        public int rarity { get; set; }
        public string color { get; set; }
        public int faces { get; set; }
        public ICollection<Image> images { get; set; }
        public ICollection<Review> reviews { get; set; }
    }
}
