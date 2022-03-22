using Microsoft.EntityFrameworkCore;
using StudentManagmentSystem.API.Models;

namespace StudentManagmentSystem.API.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        
        public DbSet<User> Users { get; set; }
        
        public DbSet<Student>Students { get; set; }

    }
}
