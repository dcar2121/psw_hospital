using Hospital_library.MedicalRecords.Model;
using Hospital_library.Model.Enumeration;
using System;

namespace Hospital_library.Model
{
    public class Person : Entity
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime BirthDate { get; set; }
        public string Jmbg { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public Gender gender { get; set; }

    }
}
