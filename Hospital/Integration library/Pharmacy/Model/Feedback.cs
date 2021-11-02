using System;
using System.Collections.Generic;
using System.Text;

namespace Integration_library.Pharmacy.Model
{
    public class Feedback
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime Date { get; set; }
        public int PharmacyId { get; set; }
    }
}
