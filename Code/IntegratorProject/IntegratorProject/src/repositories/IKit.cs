using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using System.Collections.Generic;

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
        void NewKit(NewKitDTO newkit);
        void UpDateKit(UpdateKitDTO upkit);
        void DeleteKit(int id);
        KitModel GetKitById(int id);
        List<KitModel> GetAllKits();
        List<KitModel> GetAllBySearch(string nameKit, string productClass, double price = 0);
    }
}
