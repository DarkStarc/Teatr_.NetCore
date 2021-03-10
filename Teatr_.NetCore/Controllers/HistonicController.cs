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
            var dbQuery = db.Histonics.OrderBy(p => p.Name);

            if (count.HasValue)
            {
                var returnVal = db.Histonics.Take(count.Value).Include(p => p.Preview);

                if (card)
                {
                    //all true
                    return Ok(await returnVal.Select(p =>
                        new { id = p.HistonicId, Name = p.Name, Description = p.Description, Preview = p.Preview })
                            .ToListAsync());
                }

                //null card
                return Ok(returnVal.ToListAsync());
            }

            //Null count and card
            return Ok(await db.Histonics.Include(p => p.Preview).ToListAsync());
        }

    }
}
