using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Teatr.Models;

namespace Teatr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistonicController : Controller
    {
        private readonly DatabaseContext db;
        public HistonicController(DatabaseContext _db)
        {
            this.db = _db;
        }

        [HttpGet]
        public async Task<IActionResult> GetHistonic(int? count,bool card)
        {

            IQueryable<Histonic> returnVal = db.Histonics.OrderBy(p => p.HistonicId);

            
            if (count.HasValue)
            {
               returnVal = returnVal.Take(count.Value);
            }

            if (card)
            {
                //all true
               return Ok(returnVal.Select(p =>
                    new { id = p.HistonicId, Name = p.Name, Description = p.Description, Preview = p.Preview }));
            }

            //Null count and card
            return Ok(await db.Histonics.Include(p => p.Preview).ToListAsync());
        }

    }
}
