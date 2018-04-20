using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlatlandersAPI.Models
{
    public class Review
    {
        public int ReviewID { get; set; }
        public int stars { get; set; }
        public string body { get; set; }
        public string author { get; set; }
        public string createdOn { get; set; }
        public Product product { get; set; }
    }
}
