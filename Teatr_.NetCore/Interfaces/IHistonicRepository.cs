using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Teatr.Models;

namespace Teatr.Interfaces
{
    public interface IHistonicRepository:IGenericRepository<Histonic>
    {
        public Task<IEnumerable<Histonic>> GetAllAsync();
        public Task<Histonic> GetFullInfoAsync(int id);
        public Task<IEnumerable<Histonic>> GetWithTypeAsync(int typeId,bool fullIncludes = false);
    }
}
