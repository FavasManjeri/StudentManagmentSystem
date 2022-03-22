using System.ComponentModel.DataAnnotations;

namespace StudentManagmentSystem.API.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required, StringLength(50)]
        public string UserName { get; set; }
        [Required,StringLength(50)]
        public string Password { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public int PostalCode { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string Email { get; set; }



    }
}
