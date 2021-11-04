using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Integration_library.Pharmacy.Model
{
    public class Pharmacy
    {
        [Key]
        public String PharmacyName { get; set; }
        public String ApiKey { get; set; }
    }
}
