﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Teatr.Models
{
    public class Image
    {
        public int ImageId { get; set; }
        public string Title { get; set; }
        public string Path { get; set; }
        public string UsedFor { get; set; }
    }
}
