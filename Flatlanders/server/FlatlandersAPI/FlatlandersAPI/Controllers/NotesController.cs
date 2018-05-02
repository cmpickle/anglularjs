using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using FlatlandersAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FlatlandersAPI.Controllers
{
    [Route("api/[controller]")]
    public class NotesController : Controller
    {
        private readonly MyDbContext _myDbContext;

        public NotesController(MyDbContext myDbContext)
        {
            _myDbContext = myDbContext;
        }

        [HttpGet]
        public IEnumerable<Note> GetAll()
        {
            return _myDbContext.Notes.ToList();
        }

        [HttpGet("{id}")]
        public Note Get(int id)
        {
            return _myDbContext.Notes.SingleOrDefault(n => n.Id == id);
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Note newNote)
        {
            _myDbContext.Notes.Add(newNote);

            _myDbContext.SaveChanges();
            return new HttpResponseMessage(HttpStatusCode.Created);
        }

        [HttpPut("{id}")]
        public void Put(int id)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _myDbContext.Notes.Remove(_myDbContext.Notes.FirstOrDefault(n => n.Id == id));
            _myDbContext.SaveChanges();
        }
    }
}
