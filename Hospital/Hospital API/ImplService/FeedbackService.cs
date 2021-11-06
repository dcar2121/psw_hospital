using Hospital_API.Repository;
using Hospital_library.MedicalRecords.Model.Enums;
using Hospital_library.MedicalRecords.Service;
using Hospital_library.Model;
using System;
using System.Collections.Generic;

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

        public List<Feedback> GetAll()
        {
            List<Feedback> feedbacks = _repositoryFactory.GetFeedbackRepository().GetAll();
            return feedbacks;
        }

        public void ChangeState(string id, string state)
        {
            Feedback feedback = _repositoryFactory.GetFeedbackRepository().GetOne(id);
            switch (state)
            {
                case "approved":
                    feedback.State = FeedbackState.approved;
                    break;
                case "rejected":
                    feedback.State = FeedbackState.rejected;
                    break;
                case "pending":
                    feedback.State = FeedbackState.pending;
                    break;
            }
            _repositoryFactory.GetFeedbackRepository().Update(feedback);
        }
    }
        
}
