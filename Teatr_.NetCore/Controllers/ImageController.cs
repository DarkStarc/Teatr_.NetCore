using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Web;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Teatr.Models;

namespace Teatr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : Controller
    {
        private readonly DatabaseContext db;
        public ImageController(DatabaseContext _db)
        {
            this.db = _db;
        }

        [HttpGet]
        public async Task<IActionResult> ImagePathList(string usedFor,[FromQuery(Name ="id")] int[] id)
        {

            if (!String.IsNullOrWhiteSpace(usedFor))
            {
                if (usedFor.ToLower() == "histonic" && id != null) // return paths with id
                {
                    return Ok(await db.Histonics.Where(p => id.Contains(p.HistonicId))
                       .Include(p => p.Images)
                       .Select(p => p.Images.Select(p => new { path = p.Path, title = p.Title }))
                       .ToListAsync());
                }

                //return paths with used
                return Ok(await db.Images.Where(p => p.UsedFor.ToLower() == usedFor.ToLower())
                    .Select(p => new { path = p.Path,title = p.Title })
                    .ToListAsync());
            }

            return BadRequest();
        }
    }
}
