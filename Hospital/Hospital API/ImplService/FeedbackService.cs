using Hospital_API.DTO;
using Hospital_API.Repository;
using Hospital_library.MedicalRecords.Service;
using Hospital_library.Model;
using System;
using System.Collections.Generic;
using System.Linq;

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
            if (feedback.Date == null)
            {
                feedback.Date = DateTime.Now;
            }
            _repositoryFactory.GetFeedbackRepository().Add(feedback);
        }

        public List<ViewFeedbackDTO> GetAll()
        {
            List<Feedback> feedbacks = _repositoryFactory.GetFeedbackRepository().GetAll();
            List<Person> persons = _repositoryFactory.GetPersonRepository().GetAll();
            List<ViewFeedbackDTO> feedbackDTOs = new List<ViewFeedbackDTO>();

            foreach(Feedback feedback in feedbacks)
            {
                Person person = persons.Find(id => id.Id == feedback.PersonId);
                feedbackDTOs.Add(new ViewFeedbackDTO(person.Name + " " + person.Surname, feedback.Text, feedback.Date));
            }
            return feedbackDTOs;
        }
    }
}
