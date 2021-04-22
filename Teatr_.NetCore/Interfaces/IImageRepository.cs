using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Teatr.Models;

namespace Teatr.Interfaces
{
    public interface IImageRepository:IGenericRepository<Image>
    {
        public Task<IEnumerable<Image>> GetWithHistonicAsync(int[] ids);
        public Task<IEnumerable<Image>> GetUsedForAsync(string usedFor);
    }
}
