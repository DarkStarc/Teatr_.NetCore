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
    public class DatesController : Controller
    {
        private readonly DatabaseContext db;
        public DatesController(DatabaseContext _db)
        {
            this.db = _db;
        }

        [HttpGet]
        public async Task<IActionResult> GetUpcomingDates()
        {
            return Ok(await db.Dates.Where(p=>p.Time.AddMonths(1) >= DateTime.UtcNow)
                .Include(p=>p.Histonics)
                .ToListAsync());
        }
    }
}
