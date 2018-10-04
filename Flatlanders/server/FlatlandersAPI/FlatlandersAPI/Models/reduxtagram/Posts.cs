using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlatlandersAPI.Models.reduxtagram
{
    public class Posts
    {
        public String code { get; set; }
        public String caption { get; set; }
        public int id { get; set; }
        public String display_src { get; set; }
        public List<Comments> Comments { get; set; }
    }
}
