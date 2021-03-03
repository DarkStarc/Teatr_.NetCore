using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Teatr.Models;
namespace Teatr.Models
{
    public class DateHistonic
    {
        public int DateHistonicId{ get; set; }
        public DateTime Time { get; set; }
        public IEnumerable<Histonic> Histonics { get; set; }
        public DateHistonic()
        {
            Histonics = new List<Histonic>();
        }
    }
}
