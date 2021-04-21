using System;

using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Teatr.Interfaces
{
    public interface IGenericRepository<TEntity> where TEntity:class 
    {
        Task<TEntity> Get(int id);
        Task<bool> RemoveAsync(int id);
        Task<TEntity> AddAsync(TEntity obj);
        Task<bool> UpdateAsync(TEntity obj);
    }
}
