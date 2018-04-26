using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlatlandersAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebSockets.Internal;
using Microsoft.EntityFrameworkCore;

namespace FlatlandersAPI.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private MyDbContext _myDbContext;

        public ValuesController(MyDbContext myDbContext)
        {
            _myDbContext = myDbContext;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            List<Product> products = _myDbContext.Products.Include(p=>p.reviews).Include(p=>p.images).OrderBy(p=>p.name).ToList();
            return products;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
