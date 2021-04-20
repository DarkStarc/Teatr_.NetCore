using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Teatr.Interfaces
{
    public interface IUnitOfWork
    {
        public IHistonicRepository HistonicRepository { get; }
        public ITypeHistonicRepository TypeHistonicRepository { get; }
        public Task<int> SaveChangesAsync();
    }
}
