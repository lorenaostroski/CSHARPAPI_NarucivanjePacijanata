using CSHARPAPI_NarucivanjePacijanata.Data;
using CSHARPAPI_NarucivanjePacijanata.Models;
using Microsoft.AspNetCore.Mvc;

namespace CSHARPAPI_NarucivanjePacijanata.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class UstanovaController:ControllerBase
    {
        private readonly EdunovaContext _context;

        public UstanovaController(EdunovaContext context)
        {
            _context = context;
        }


        [HttpGet]

        public ActionResult Get()
        {
            return Ok(_context.Ustanove);
        }

        [HttpGet]
        [Route("{sifra:int}")]

        public IActionResult GetBySifra(int sifra) 
        {
            return Ok(_context.Ustanove.Find(sifra));
        }

        [HttpPost]

        public IActionResult Post(Ustanova ustanova) 
        {
            _context.Ustanove.Add(ustanova);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, ustanova);

        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]

        public IActionResult Put(int sifra,Ustanova ustanova) 
        {
            var ustanovaIzBaze = _context.Ustanove.Find(sifra);

            ustanovaIzBaze.Naziv= ustanova.Naziv;
            ustanovaIzBaze.Adresa= ustanova.Adresa;

            _context.Ustanove.Update(ustanovaIzBaze);
            _context.SaveChanges();

            return Ok(new {poruka="Uspješno promjenjeno" });
        }

        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]

        public IActionResult Delete(int sifra) 
        {
            var ustanovaIzBaze = _context.Ustanove.Find(sifra);
            _context.Ustanove.Remove(ustanovaIzBaze);
            _context.SaveChanges();
            return Ok(new { poruka = "Uspješno obrisano" });
                
        }


    }


}
