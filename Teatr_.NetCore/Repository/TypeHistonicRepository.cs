using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Teatr.Interfaces;
using Teatr.Models;

namespace Teatr.Repository
{
    public class TypeHistonicRepository : GenericRepository<TypeHistonic>, ITypeHistonicRepository
    {
        public TypeHistonicRepository(DatabaseContext _db)
        {
            this.db = _db;
        }
        public TypeHistonic GetTypeWithName(string nameType)
        {
            return db.TypeHistonics.FirstOrDefault(p => p.Name == nameType);
        }

    }
}
