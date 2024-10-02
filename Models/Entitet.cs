using System.ComponentModel.DataAnnotations;

namespace CSHARPAPI_NarucivanjePacijanata.Models
{
    public abstract class Entitet
    {
        [Key] 
        public int Sifra { get; set; }
    }
}
