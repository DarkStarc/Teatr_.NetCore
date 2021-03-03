using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Teatr.Models
{
    public class Histonic
    {
        public int HistonicId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Roles { get; set; }
        public string UrlToTraller { get; set; }
        public DateTimeOffset TimeDuration { get; set; }
        public IEnumerable<Image> Images { get; set; }
        public IEnumerable<DateHistonic> Dates { get; set; }

        public Histonic() {
            Images = new List<Image>();

            Dates = new List<DateHistonic>();
        } 
    }
}
