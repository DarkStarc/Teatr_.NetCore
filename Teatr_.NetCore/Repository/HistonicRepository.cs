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
    public class HistonicRepository : GenericRepository<Histonic>,IHistonicRepository
    {
        public HistonicRepository(DatabaseContext _db)
        {
            this.db = _db;
        }

        public async Task<IEnumerable<Histonic>> GetAll()
        {
            return await db.Histonics.ToListAsync();
        }

        public async Task<IEnumerable<Histonic>> GetWithType(int typeId)
        {
            return await db.Histonics.Where(p => p.TypeId == typeId).ToListAsync();
        }
        public async Task<IEnumerable<Histonic>> GetWithType(int typeId, Expression<Func<Histonic, object>> includeQuery)
        {
            return await db.Histonics.Include(includeQuery).Where(p => p.TypeId == typeId).ToListAsync();
        }
    }
}
