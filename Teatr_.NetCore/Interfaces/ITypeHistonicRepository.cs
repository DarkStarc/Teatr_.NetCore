using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Teatr.Models;

namespace Teatr.Interfaces
{
    public interface ITypeHistonicRepository:IGenericRepository<TypeHistonic>
    {
        public TypeHistonic GetTypeWithName(string nameType);
    }
}
