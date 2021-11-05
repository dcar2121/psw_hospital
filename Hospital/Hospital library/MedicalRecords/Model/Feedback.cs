using Hospital_library.MedicalRecords.Model;
using System;

namespace Hospital_library.Model
{
    public class Feedback : Entity
    {
         public Feedback(string id, string personid, string text,  DateTime date)
        {
            PersonId = personid;
            Text = text;
            Date = date;
            Id = id;
        }
        public Feedback()
        {

        }

        public string PersonId { get; set; }
        public string Text { get; set; }
        public DateTime? Date { get; set; }

       
    }
}
