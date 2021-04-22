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

        public async Task<Histonic> GetFullInfoAsync(int id)
        {
            return await db.Histonics.Include(p=>p.Images)
                    .Include(p=>p.Preview)
                    .Include(p=>p.Type)
                    .Include(p=>p.Dates)
                    .FirstOrDefaultAsync(p => p.HistonicId == id);
        }
        public async Task<IEnumerable<Histonic>> GetAllAsync()
        {
            return await db.Histonics.ToListAsync();
        }

        public async Task<IEnumerable<Histonic>> GetWithTypeAsync(int typeId, bool allInfo = false)
        {
            var query = db.Histonics.Where(p => p.TypeId == typeId);

            if (allInfo)
            {
                query = query.Include(p => p.Dates)
                .Include(p => p.Images)
                .Include(p => p.Preview)
                .Include(p => p.Type)
                .Include(p => p.Dates);
            }

            return await query.ToListAsync();
        }
    }
}
