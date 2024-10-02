using CSHARPAPI_NarucivanjePacijanata.Models;
using Microsoft.EntityFrameworkCore;

namespace CSHARPAPI_NarucivanjePacijanata.Data
{
    public class EdunovaContext:DbContext
    {
        public EdunovaContext(DbContextOptions<EdunovaContext> opcije) : base(opcije) {
        
        }
            
        
        

    public required DbSet<Ustanova> Ustanove { get; set; }



    }
}
