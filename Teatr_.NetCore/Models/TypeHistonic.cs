using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Teatr.Models
{
    public class TypeHistonic
    {
        [JsonIgnore]
        public int TypeHistonicId { get; set; }
        public string Name { get; set; }
        [JsonIgnore]
        public IEnumerable<Histonic> Histonics { get; set; }

        public TypeHistonic()
        {
            this.Histonics = new List<Histonic>();
        }
    }
}
