using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlatlandersAPI.Models
{
    public class Image
    {
        public int Id { get; set; }
        public string imageUrl { get; set; }
        public Product product { get; set; }
    }
}
