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
        public async Task<IActionResult> GetHistonic(int? count)
        {
            var dbQuery = db.Histonics.OrderBy(p => p.Name);
            if (count.HasValue)
            {
               return Ok(await dbQuery.Take(count.Value).ToListAsync());
            }

            return Ok(await dbQuery.ToListAsync());
        }

    }
}
