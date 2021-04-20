using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Teatr.Interfaces;
using Teatr.Models;

namespace Teatr.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DatabaseContext db;

        private IHistonicRepository histonicRepository;
        private ITypeHistonicRepository typeHistonicRepository;
        public UnitOfWork(DatabaseContext _db)
        {
            this.db = _db;
        }
        public IHistonicRepository HistonicRepository
        {
            get
            {
                if (this.histonicRepository == null) this.histonicRepository = new HistonicRepository(db);
                return this.histonicRepository;
            }
        }

        public ITypeHistonicRepository TypeHistonicRepository 
        {
            get
            {
                if (this.typeHistonicRepository == null) this.typeHistonicRepository = new TypeHistonicRepository(db);
                return this.typeHistonicRepository;
            }   
        }

        public async Task<int> SaveChangesAsync()
        {
            return await db.SaveChangesAsync();
        }
    }
}
