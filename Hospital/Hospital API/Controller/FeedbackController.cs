using AutoMapper;
using Hospital_API.DTO;
using Hospital_API.Service;
using Hospital_library.MedicalRecords.Model.Enums;
using Hospital_library.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Hospital_API.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        private FeedbackService _feedbackService;

        // Create a field to store the mapper object
        private readonly IMapper _mapper;

        private List<FeedbackResponseDTO> feedbacks = new List<FeedbackResponseDTO>();

        // Assign the object in the constructor for dependency injection

        public FeedbackController(FeedbackService feedbackService, IMapper mapper)
        {
            _feedbackService = feedbackService;
            _mapper = mapper;

            FeedbackResponseDTO f1 = new FeedbackResponseDTO();
            FeedbackResponseDTO f2 = new FeedbackResponseDTO();
            f1.PersonId = "user1";
            f2.PersonId = "user2";
            f1.Text = "Amazing!";
            f2.Text = "Awful!";
            this.feedbacks.Add(f1);
            this.feedbacks.Add(f2);

        }

        [HttpPost]
        public IActionResult Add(FeedbackDTO dto) 
        {
            if (dto.Text.Length <= 0 || String.IsNullOrEmpty(dto.PersonId)) 
            {
                return BadRequest();   
            }
           
            var model = _mapper.Map<Feedback>(dto);
            _feedbackService.Add(model);
                
            return Ok();
        }
        [HttpGet]
        public IActionResult GetTest()
        {
            return Ok(this.feedbacks);
        }
        [HttpPut]
        public IActionResult ApproveFeedback(FeedbackStateChangeDTO dto)
        {
            foreach(FeedbackResponseDTO f in this.feedbacks)
            {
                if (f.PersonId.Equals(dto.PersonId))
                {
                    if (dto.State.Equals("approved"))
                    {
                        f.State = FeedbackState.approved;
                        return Ok();
                    }
                    else
                    {
                        f.State = FeedbackState.rejected;
                        return Ok();
                    }
                }
            }
            return BadRequest();
        } 
    }
}
