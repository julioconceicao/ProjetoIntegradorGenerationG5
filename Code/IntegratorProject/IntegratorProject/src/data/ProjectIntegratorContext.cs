using IntegratorProject.src.models;
using Microsoft.EntityFrameworkCore;


namespace IntegratorProject.src.data
{
    /// <summary>
    /// <para>Resume> Creating context</para>
    /// <para>By:Lethicya Lopes </para>
    /// <para>Versão: 1.0</para>
    /// <para>Data: 04/05/2022</para>
    /// </summary>
    public class ProjectIntegratorContext : DbContext
    {
        public DbSet<UserModel> UserModel { get; set; }
        public DbSet<OrderModel> OrderModel { get; set; }
        public DbSet<KitModel> KitModel { get; set; }

        public ProjectIntegratorContext(DbContextOptions<ProjectIntegratorContext> opt) : base(opt)
        {

        }
    }
}

