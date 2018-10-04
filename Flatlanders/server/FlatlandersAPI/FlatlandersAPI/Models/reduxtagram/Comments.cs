using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlatlandersAPI.Models.reduxtagram
{
    public class Comments
    {
        public int id { get; set; }
        public String text { get; set; }
        public String user { get; set; }
        public Posts post { get; set; }
    }
}
