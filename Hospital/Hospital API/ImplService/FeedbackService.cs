using Hospital_API.Repository;
using Hospital_library.MedicalRecords.Service;
using Hospital_library.Model;
using System;

namespace Hospital_API.Service
{

    public class FeedbackService : IFeedbackService
    {
        public HospitalRepositoryFactory _repositoryFactory;
        
        public FeedbackService(HospitalRepositoryFactory repositoryFactory)
        {
            _repositoryFactory = repositoryFactory;
           
        }

        public void Add(Feedback feedback) 
        {
            if(feedback.Date == null)
            {
                feedback.Date = DateTime.Now;
            }
            _repositoryFactory.GetFeedbackRepository().Add(feedback);
        }  
    }
        
}
