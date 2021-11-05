using AutoMapper;
using Hospital_API.DTO;
using Hospital_API.Service;
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

        // Assign the object in the constructor for dependency injection

        public FeedbackController(FeedbackService feedbackService, IMapper mapper)
        {
            _feedbackService = feedbackService;
            _mapper = mapper;

        }

        [HttpGet]
        public IActionResult Get()
        {
            var feedbacks = new List<FeedbackDTO>()
            {
                new FeedbackDTO()
                {
                    PersonId = "1",
                    Text =  "LOREM IPSUM"
                },
                new FeedbackDTO()
                {
                    PersonId = "2",
                    Text =  "IPSUM LOREM"
                },
                new FeedbackDTO()
                {
                    PersonId = "3",
                    Text =  "DANAS JE LEP DAN"
                },
                new FeedbackDTO()
                {
                    PersonId = "4",
                    Text =  "VEDRO JE"
                }
            };

            return Ok(feedbacks);
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
    }
}
