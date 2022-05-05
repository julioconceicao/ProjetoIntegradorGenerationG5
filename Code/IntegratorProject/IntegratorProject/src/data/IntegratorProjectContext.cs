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
    public class IntegratorProjectContext : DbContext
    {
        public DbSet<UserModel> Users { get; set; }
        public DbSet<OrderModel> Orders { get; set; }
        public DbSet<KitModel> Kits { get; set; }
        public IntegratorProjectContext(DbContextOptions<IntegratorProjectContext> opt) : base(opt)
        {
        }
    }
}

