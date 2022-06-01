using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IntegratorProject.src.repositories
{
    /// <summary>
    /// <para>Resume> Created interface iKit</para>
    /// <para>By: Leticia Zimerer, Michelli Oliveira and Paulo Almeida </para>
    /// <para>Version: 1.0</para>
    /// <para>Date: 05/05/2022</para>
    /// </summary>
    public interface IKit
    {
        Task NewKitAsync(NewKitDTO newkit);
        Task UpdateKitAsync(UpdateKitDTO upkit);
        Task DeleteKitAsync(int id);
        Task<KitModel> GetKitByIdAsync(int id);
        Task<List<KitModel>> GetAllKitsAsync();
        Task<List<KitModel>> GetAllBySearchAsync(double price, string nameKit, string productClass);
    }
}
