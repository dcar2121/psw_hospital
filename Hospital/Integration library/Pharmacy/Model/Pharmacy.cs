using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Integration_library.Pharmacy.Model
{
    public class Pharmacy
    {

        public Pharmacy(string pharmacyName, string apiKey)
        {
            PharmacyName = pharmacyName;
            ApiKey = apiKey;
        }
        [Key]
        public String PharmacyName { get; set; }
        public String ApiKey { get; set; }

        public Pharmacy() { }
    }
}
