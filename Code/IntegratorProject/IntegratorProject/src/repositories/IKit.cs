using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using System.Collections.Generic;

namespace IntegratorProject.src.repositories
{
    /// <summary>
    /// <para>Resume> Creating Kits Attributes</para>
    /// <para>By: Leticia Zimerer, Michelli Oliveira and Paulo Almeida </para>
    /// <para>Versão: 1.0</para>
    /// <para>Data: 05/05/2022</para>
    /// </summary>
    public interface IKit
    {
        void NewKit(NewKitDTO kit);
        void UpdateKit(UpdateKitDTO kit);
        void DeleteKit(int id);
        KitModel GetKitById(int id);
        List<KitModel> GetAllKits();
        List<KitModel> GetAllKitsBySearch(string name, string productClass, float price, string expirationDate);
    }
}
