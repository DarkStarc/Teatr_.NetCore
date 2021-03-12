using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Teatr.Models
{
    public class TypeHistonic
    {
        public int TypeHistonicId { get; set; }
        public string Name { get; set; }
        public IEnumerable<Histonic> Histonics { get; set; }

        public TypeHistonic()
        {
            this.Histonics = new List<Histonic>();
        }
    }
}
