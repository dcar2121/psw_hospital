using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Integration_library.Pharmacy.Model;
using RestSharp;
using System.Text.Json;

namespace IntegrationAPI.Controller
{
    [Route("api/[controller]")]

    [ApiController]
    public class FeedbacksController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public FeedbacksController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Feedbacks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Feedback>>> GetFeedbacks()
        {
            return await _context.Feedbacks.ToListAsync();
        }

        [HttpGet]
        [Route("pharmacy/getFeedbackResponse")]
        public String GetFeedbackResponses()
        {
            //izvucemo id feedbacka  koji stavimo u header ovog geta recimo i izvucemo hospital jer treba da bismo postavili njen api key (koji imamo u nansoj bazi ) u request
            String url = "https://localhost:44377/api/FeedbackResponses"; // + id feedback-a
            var client = new RestClient(url);
            var request = new RestRequest();

            var response = client.Get(request);

            //dodati i zastitu sta ako nema responsa na taj feedback
            //FeedbackResponse responses = JsonSerializer.Deserialize<FeedbackResponse>(response.Content.ToString());
            return response.Content.ToString();
        }

        [HttpGet]
        [Route("pharmacy/getFeedbackResponse/{id}")]
        public String GetFeedbackResponse(int id)
        {
            String url = "https://localhost:44377/api/FeedbackResponses/" + id; // + id feedback-a
            var client = new RestClient(url);
            var request = new RestRequest();

            var response = client.Get(request);

            //dodati i zastitu sta ako nema responsa na taj feedback
            FeedbackResponse responses = JsonSerializer.Deserialize<FeedbackResponse>(response.Content.ToString());
            return response.Content.ToString();
        }

        // GET: api/Feedbacks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Feedback>> GetFeedback(int id)
        {
            var feedback = await _context.Feedbacks.FindAsync(id);

            if (feedback == null)
            {
                return NotFound();
            }

            return feedback;
        }

        // PUT: api/Feedbacks/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFeedback(int id, Feedback feedback)
        {
            if (id != feedback.Id)
            {
                return BadRequest();
            }

            _context.Entry(feedback).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FeedbackExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Feedbacks
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Feedback>> PostFeedback(Feedback feedback)
        {
            _context.Feedbacks.Add(feedback);
            await _context.SaveChangesAsync();

            String url = "https://localhost:44377/api/Feedbacks";
            var client = new RestClient(url);
            var request = new RestRequest();
            request.AddJsonBody(feedback);

            var response = client.Post(request);


            return CreatedAtAction("GetFeedback", new { id = feedback.Id }, feedback);
        }

        // DELETE: api/Feedbacks/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Feedback>> DeleteFeedback(int id)
        {
            var feedback = await _context.Feedbacks.FindAsync(id);
            if (feedback == null)
            {
                return NotFound();
            }

            _context.Feedbacks.Remove(feedback);
            await _context.SaveChangesAsync();

            return feedback;
        }

        private bool FeedbackExists(int id)
        {
            return _context.Feedbacks.Any(e => e.Id == id);
        }
    }
}
