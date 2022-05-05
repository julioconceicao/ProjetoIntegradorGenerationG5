using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using System.Collections.Generic;
using static IntegratorProject.src.dtos.NewKitDTO;

namespace IntegratorProject.src.repositories
{
    /// <summary>
    /// <para>Resume> Created interface iKit</para>
    /// <para>By: Leticia Zimerer, Michelli Oliveira and Paulo Almeida </para>
    /// <para>Version: 1.0</para>
    /// <para>Data: 05/05/2022</para>
    /// </summary>
    public interface IKit
    {
        void NewKit(NewKitDTO kit);
        void UpDateKit(UpDateKitDTO kit);
        void DeleteKit(int id);
        KitModel GetKitById(int id);
        List<KitModel> GetAllKits();
        List<KitModel> GetAllKitsBySearch(string name, string productClass, float price, string expirationDate);
    }
}
