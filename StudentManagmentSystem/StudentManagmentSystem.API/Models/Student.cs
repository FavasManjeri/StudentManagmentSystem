using System.ComponentModel.DataAnnotations;

namespace StudentManagmentSystem.API.Models
{
    public class Student
    {
        public int Id { get; set; }
        [Required,StringLength(30)]
        public string Name { get; set; }
        [Required]
        public int Age { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string PhoneNumber { get; set; }

    }
}
