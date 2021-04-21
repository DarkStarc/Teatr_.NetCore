using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Teatr.Models;

namespace Teatr.Interfaces
{
    public interface IHistonicRepository:IGenericRepository<Histonic>
    {
        public Task<IEnumerable<Histonic>> GetAll();
        public Task<Histonic> GetFullInfo(int id);
        public Task<IEnumerable<Histonic>> GetWithType(int typeId,bool fullIncludes = false);
    }
}
