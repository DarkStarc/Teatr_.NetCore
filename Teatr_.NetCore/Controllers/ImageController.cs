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
    [Route("api/images/[action]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly DatabaseContext db;
        public ImageController(DatabaseContext _db)
        {
            this.db = _db;
        }

        [HttpGet]
        public async Task<JsonResult> ImagePathList(string usedFor)
        {
            var s = Request.PathBase;
            if (!String.IsNullOrWhiteSpace(usedFor))
            {
                return new JsonResult(await db.Images.Where(p => p.UsedFor.ToLower() == usedFor.ToLower()).Select(p => p.Path).ToListAsync());
            }

            return null;
        }
    }
}
