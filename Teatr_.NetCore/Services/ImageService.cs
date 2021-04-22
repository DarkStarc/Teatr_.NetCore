using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Teatr.Interfaces;
using Teatr.Models;

namespace Teatr.Services
{
    public class ImageService
    {
        private readonly IUnitOfWork unitOfWork;
        public ImageService(IUnitOfWork _unitOfWork)
        {
            this.unitOfWork = _unitOfWork;
        }

        public async Task<IEnumerable<Image>> GetImagesAsync(string usedFor,int[] ids)
        {
            var images = await this.unitOfWork.ImageRepository.GetWithHistonicAsync(ids);

            images = images.Where(p => p.UsedFor.Contains(usedFor));

            return images;
        }
    }
}
