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
        private readonly MyDbContext dbContext;
        public FeedbackController(FeedbackService feedbackService, IMapper mapper, MyDbContext myDb)
        {
            _feedbackService = feedbackService;
            _mapper = mapper;
            dbContext = myDb;

        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_feedbackService.GetAll());
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
