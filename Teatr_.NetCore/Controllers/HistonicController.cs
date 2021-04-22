using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Teatr.Interfaces;
using Teatr.Models;
using Teatr.Services;

namespace Teatr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistonicController : Controller
    {
        private readonly HistonicService histonicService;
        public HistonicController(HistonicService _histonicService)
        {
            this.histonicService = _histonicService;
        }

        [HttpGet]
        public async Task<IActionResult> GetHistonicWithType(string typeHistonic, bool allInfo = false)
        {
            if (String.IsNullOrWhiteSpace(typeHistonic) == false)
            {
                return Ok(await histonicService.GetWithTypeAsync(typeHistonic, allInfo));
            }
            else 
            {
                return BadRequest();
            }
    
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetHistonicWithId(int id, bool allInfo = false)
        {
            if (id > 0)
            {
                return Ok(await this.histonicService.GetHistonicWithIdAsync(id, allInfo));
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
