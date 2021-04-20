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
        public Task<IEnumerable<Histonic>> GetWithType(int typeId);
        public Task<IEnumerable<Histonic>> GetWithType(int typeId, Expression<Func<Histonic, object>> includeQuery);
    }
}
