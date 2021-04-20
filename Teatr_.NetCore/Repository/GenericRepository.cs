using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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
            db.AddAsync(obj);
            return obj;
        }

        public async Task<TEntity> Get(int id)
        {
            return db.Find<TEntity>(id);
        }

        public async Task<bool> RemoveAsync(int id)
        {
            TEntity obj = await this.Get(id);
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
