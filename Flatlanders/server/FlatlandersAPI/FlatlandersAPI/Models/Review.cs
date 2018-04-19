using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlatlandersAPI.Models
{
    public class Review
    {
        public int ReviewID { get; set; }
        public int Stars { get; set; }
        public string Body { get; set; }
        public string Author { get; set; }
        public string CreatedOn { get; set; }
        public Product Product { get; set; }
    }
}
