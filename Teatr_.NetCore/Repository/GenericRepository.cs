using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Teatr.Interfaces;
using Teatr.Models;

namespace Teatr.Repository
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
        protected DatabaseContext db;
        public async Task<TEntity> AddAsync(TEntity obj)
        {
            await db.AddAsync(obj);
            return obj;
        }

        public async Task<TEntity> GetAsync(int id)
        {
            return await db.FindAsync<TEntity>(id);
        }
        public async Task<bool> RemoveAsync(int id)
        {
            TEntity obj = await this.GetAsync(id);
            db.Remove(obj);
            return true;
        }

        public async Task<bool> UpdateAsync(TEntity obj)
        {
            db.Update(obj);
            return true;
        }
    }
}
