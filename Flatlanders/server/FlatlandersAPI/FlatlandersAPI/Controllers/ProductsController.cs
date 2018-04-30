using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using FlatlandersAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebSockets.Internal;
using Microsoft.EntityFrameworkCore;

namespace FlatlandersAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ProductsController : Controller
    {
        private MyDbContext _myDbContext;

        public ProductsController(MyDbContext myDbContext)
        {
            _myDbContext = myDbContext;
        }

        // GET api/products
        [HttpGet]
        public IEnumerable<Product> GetAll()
        {
            return _myDbContext.Products.Include(p => p.reviews).Include(p => p.images).OrderBy(p => p.name).ToList();
        }

        // GET api/products/5
        [HttpGet("{id}")]
        public Product Get(string id)
        {
            return _myDbContext.Products.Include(p => p.reviews).Include(p => p.images).SingleOrDefault(p => p.ProductID == id);
        }

        // POST api/products
        [HttpPost]
        public HttpResponseMessage Post([FromBody]Product newProduct)
        {
            _myDbContext.Products.Add(newProduct);
            foreach (var newProductImage in newProduct.images)
            {
                _myDbContext.Images.Add(newProductImage);
            }
            _myDbContext.SaveChanges();
            return new HttpResponseMessage(HttpStatusCode.Created);
        }

        [HttpGet("{id}")]
        public double ReviewCount(string id)
        {
            return _myDbContext.Products.Include(p => p.reviews).SingleOrDefault(p => p.ProductID == id).reviews.Count;
        }

        [HttpGet("{id}")]
        public double ReviewAverage(string id)
        {
            double avg = 0;
            foreach (Review review in _myDbContext.Products.Include(p => p.reviews).SingleOrDefault(p => p.ProductID == id).reviews)
            {
                avg += review.stars;
            }
            avg /= _myDbContext.Products.Include(p => p.reviews).SingleOrDefault(p => p.ProductID == id).reviews.Count;
            return avg;
        }

        // PUT api/products/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
            //_myDbContext.Products.Include(p => p.images).FirstOrDefault(p => p.ProductID);
        }

        // DELETE api/products/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
