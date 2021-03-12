using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Teatr.Models
{
    public class Image
    {
        [JsonIgnore]
        public int ImageId { get; set; }
        public string Title { get; set; }
        public string Path { get; set; }
        public string UsedFor { get; set; }
        [JsonIgnore]
        public List<Histonic> Histonics { get; set; }
        [JsonIgnore]
        public List<Histonic> Preview { get; set; }
        public Image()
        {
            Histonics = new List<Histonic>();
            Preview = new List<Histonic>();
        }
    }
}
