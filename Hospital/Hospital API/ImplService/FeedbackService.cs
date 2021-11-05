using Hospital_API.Repository;
using Hospital_library.MedicalRecords.Service;
using Hospital_library.Model;
using System;
using System.Collections.Generic;

namespace Hospital_API.Service
{

    public class FeedbackService : IFeedbackService
    {
        public HospitalRepositoryFactory _repositoryFactory;
        //IFeedbackRepository _repository; 
        public FeedbackService(HospitalRepositoryFactory repositoryFactory)
        {
            _repositoryFactory = repositoryFactory;
            //_repository = repo;
        }

        public void Add(Feedback feedback) 
        {
            if(feedback.Date == null)
            {
                feedback.Date = DateTime.Now;
            }
            _repositoryFactory.GetFeedbackRepository().Add(feedback);
        }  

        public List<Feedback> GetAll()
        {
            return _repositoryFactory.GetFeedbackRepository().GetAll();
        }
    }
        
}
