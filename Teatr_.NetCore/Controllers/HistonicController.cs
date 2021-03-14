﻿using Microsoft.AspNetCore.Http;
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
        public async Task<IActionResult> GetHistonicWithType(string typeHistonic, bool allInfo = false)
        {

            IQueryable<Histonic> returnVal = db.Histonics.OrderBy(p => p.HistonicId).Include(p=>p.Type);


            if (String.IsNullOrWhiteSpace(typeHistonic) == false)
            {
                //need with type
                returnVal = returnVal.Where(p => p.Type.Name.ToLower() == typeHistonic.ToLower());
            }

            if (!allInfo)
            {
                //all info needed
               return Ok(returnVal.Select(p =>
                    new { id = p.HistonicId, Name = p.Name, Description = p.Description, Preview = p.Preview }));
            }

            //Null count and card
            return Ok(await returnVal.Include(p => p.Preview).ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetHistonicWithId(int id, bool allInfo = false)
        {
            if (db.Histonics.Any(p=>p.HistonicId == id) == false)
            {
                return BadRequest();
            }

            if (allInfo)
            {
                return Ok(await db.Histonics.Include(p => p.Images).Include(p => p.Type).FirstOrDefaultAsync(p => p.HistonicId == id));
            }
            else
            {
                var buffer = await db.Histonics.Include(p => p.Preview)
                    .Include(p => p.Type)
                    .Select(p => new { id = p.HistonicId, Name = p.Name, Description = p.Description, Preview = p.Preview })
                    .FirstOrDefaultAsync(p => p.id == id);
                return Ok(buffer);
            }
        }
    }
}
