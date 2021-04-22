using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Teatr.Interfaces;
using Teatr.Models;

namespace Teatr.Repository
{
    public class ImageRepository : GenericRepository<Image>, IImageRepository
    {
        public ImageRepository(DatabaseContext _db)
        {
            this.db = _db;
        }

        public async Task<IEnumerable<Image>> GetWithHistonicAsync(int[] ids)
        {
            return await db.Histonics.Where(p => ids.Contains(p.HistonicId))
                .Include(p => p.Images)
                .SelectMany(p => p.Images)
                .ToListAsync();
        }

        public async Task<IEnumerable<Image>> GetUsedForAsync(string usedFor)
        {
            return await db.Images.Where(p => p.UsedFor.Contains(usedFor)).ToListAsync();
        }

    }
}
