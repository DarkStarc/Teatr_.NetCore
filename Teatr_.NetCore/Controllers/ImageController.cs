using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Web;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Teatr.Models;
using Teatr.Interfaces;
using Teatr.Services;

namespace Teatr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : Controller
    {
        private readonly ImageService imageService;
        public ImageController(ImageService _imageService)
        {
            this.imageService = _imageService;
        }

        [HttpGet]
        public async Task<IActionResult> ImagePathList(string usedFor,[FromQuery(Name ="id")] int[] id)
        {

            if (!String.IsNullOrWhiteSpace(usedFor) || id.Length > 0)
            {
                return Ok(await this.imageService.GetImagesAsync(usedFor, id));
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
