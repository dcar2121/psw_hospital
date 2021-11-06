
using Hospital_library.MedicalRecords.Repository.Interface;
using Hospital_library.Model;
using Hospital_API;
using Hospital_library.MedicalRecords.Repository;
using Hospital_API.DTO;
using System.Collections.Generic;

namespace Hospital_API.Repository
{
    public class FeedbackRepository : Repository<Feedback>, IFeedbackRepository
    {
        private MyDbContext _context;
        public FeedbackRepository(MyDbContext context)
            : base(context)
        { _context = context; }

       /* public List<ViewFeedbackDTO> GetAll()
        {
           // return (from f in _context.Feedbacks
         //           join p in _context.Persons on f.)   
        }*/
    }
}
