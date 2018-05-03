using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlatlandersAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FlatlandersAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Category")]
    public class CategoryController : Controller
    {
        private readonly MyDbContext _myDbContext;

        public CategoryController(MyDbContext myDbContext)
        {
            _myDbContext = myDbContext;
        }

        [HttpGet]
        public IEnumerable<Category> GetAll()
        {
            return _myDbContext.Categories.ToList();
        }
    }
}