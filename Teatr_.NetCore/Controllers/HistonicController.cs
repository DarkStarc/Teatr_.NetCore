using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Teatr.Interfaces;
using Teatr.Models;

namespace Teatr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistonicController : Controller
    {
        public IUnitOfWork unitOfWork;
        public HistonicController(IUnitOfWork _unitOfWork)
        {
            this.unitOfWork = _unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetHistonicWithType(string typeHistonic, bool allInfo = false)
        {
            if (String.IsNullOrWhiteSpace(typeHistonic) == false)
            {
                TypeHistonic type = unitOfWork.TypeHistonicRepository.GetTypeWithName(typeHistonic);

                if (allInfo)
                {
                    return Ok(await unitOfWork.HistonicRepository.GetWithType(type.TypeHistonicId));
                }
                else
                {
                    return Ok(await unitOfWork.HistonicRepository.GetWithType(type.TypeHistonicId, p => p.Type));
                }
                
            }
            else //typeHistonic empty
            {
                return BadRequest();
            }
    
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetHistonicWithId(int id, bool allInfo = false)
        {
            return Ok(await unitOfWork.HistonicRepository.Get(id));
        }
    }
}
