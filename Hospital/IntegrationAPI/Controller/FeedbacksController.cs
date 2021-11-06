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
<<<<<<< HEAD
        private readonly PharmacyDbContext _pharmacycontext;

        public FeedbacksController(DatabaseContext context,PharmacyDbContext c)
        {
            _context = context;
            _pharmacycontext = c;
=======

        public FeedbacksController(DatabaseContext context)
        {
            _context = context;
>>>>>>> develop
        }

        // GET: api/Feedbacks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Feedback>>> GetFeedbacks()
        {
<<<<<<< HEAD

=======
>>>>>>> develop
            return await _context.Feedbacks.ToListAsync();
        }

        [HttpGet]
<<<<<<< HEAD
        [Route("pharmacyNames")]
        public List<string> getPharmacyNames()
        {
            List<string> names = new List<string>();
            _pharmacycontext.Pharmacies.ToList().ForEach(pharmacy => names.Add(pharmacy.PharmacyName));
            return names;
        }

        [HttpPost]
        [Route("registerPharmacy")]
        public IActionResult AddHospital(string apiKey)
        {
            Random rnd = new Random();
            string pharmacyName = "pharmacy" + rnd.Next(500);
            _pharmacycontext.Pharmacies.Add(new Pharmacy(pharmacyName, "newPharmacyKey"));
            _pharmacycontext.SaveChanges();
            return Ok();
        }

        [HttpGet]
        [Route("pharmacy/getFeedbackResponse")]
        public String GetFeedbackResponses()
        {

            String url = "https://localhost:44377/api/FeedbackResponses";
=======
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
>>>>>>> develop
            var client = new RestClient(url);
            var request = new RestRequest();

            var response = client.Get(request);
<<<<<<< HEAD
=======

            //dodati i zastitu sta ako nema responsa na taj feedback
            FeedbackResponse responses = JsonSerializer.Deserialize<FeedbackResponse>(response.Content.ToString());
>>>>>>> develop
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

<<<<<<< HEAD
=======
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
>>>>>>> develop
        [HttpPost]
        public async Task<ActionResult<Feedback>> PostFeedback(Feedback feedback)
        {
            _context.Feedbacks.Add(feedback);
            await _context.SaveChangesAsync();

            String url = "https://localhost:44377/api/Feedbacks";
            var client = new RestClient(url);
            var request = new RestRequest();
            request.AddJsonBody(feedback);

<<<<<<< HEAD
            String hospitalApiKey = getPharmacyApiKey(feedback.PharmacyName);
            request.AddHeader("ApiKey", hospitalApiKey);

            Response.Headers.Add("ApiKey", hospitalApiKey);

            var response = client.Post(request);
            return CreatedAtAction("GetFeedback", new { id = feedback.Id }, feedback);
        }

        private String getPharmacyApiKey(String pharmacyName)
        {
            List<Pharmacy> result = new List<Pharmacy>();
            _pharmacycontext.Pharmacies.ToList().ForEach
                (pharmacy => result.Add(pharmacy));

            foreach(Pharmacy p in result){
                if (p.PharmacyName.Equals(pharmacyName))
                    return p.ApiKey;
            }

            return "Apoteka ne postoji u bazi";
        }



=======
            var response = client.Post(request);


            return CreatedAtAction("GetFeedback", new { id = feedback.Id }, feedback);
        }

>>>>>>> develop
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
