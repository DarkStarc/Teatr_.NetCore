using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
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
        public DateTimeOffset? TimeDuration { get; set; }
        public List<Image> Images { get; set; }
        public List<DateHistonic> Dates { get; set; }
        [JsonIgnore]
        public int? PreviewId { get; set; }
        public Image Preview { get; set; }
        [JsonIgnore]
        public int? TypeId { get; set; }
        public TypeHistonic Type { get; set; }
        public Histonic() {
            Images = new List<Image>();

            Dates = new List<DateHistonic>();
        } 
    }
}
