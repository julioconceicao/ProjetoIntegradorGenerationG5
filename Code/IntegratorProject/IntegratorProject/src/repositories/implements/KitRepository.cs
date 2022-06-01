using IntegratorProject.src.data;
using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntegratorProject.src.repositories.implements
{
    /// <summary>
    /// <para>Resume> Responsible class to implements IKit</para>
    /// <para>By: Leticia Zimerer, Michelli Oliveira and Paulo Almeida </para>
    /// <para>Version: 1.0</para>
    /// <para>Date: 05/05/2022</para>
    /// </summary>
    public class KitRepository : IKit
    {
        #region Attributes
        private readonly IntegratorProjectContext _context;
        #endregion Attributes

        #region Constructors
        public KitRepository(IntegratorProjectContext context)
        {
            _context = context;
        }
        #endregion Constructors

        #region Methods

        /// <summary>
        /// <para>Resume: Asynchronous methods to get a kit by Id</para>
        /// </summary>
        /// <param name="id">Id by Kit</param>
        /// <return>KitModel</return>
        public async Task<KitModel> GetKitByIdAsync(int id)
        {
            return await _context.Kits.FirstOrDefaultAsync(u => u.Id == id);
        }

        /// <summary>
        /// <para>Resume: Asynchronous methods to created a new Kit</para>
        /// </summary>
        /// <param name="newkit">NewKitDTO</param>
        public async Task NewKitAsync(NewKitDTO newkit)
        {
            await _context.Kits.AddAsync(new KitModel
            {
                Name = newkit.Name,
                ProductClass = newkit.ProductClass,
                Price = newkit.Price,
                ExpirationDate = newkit.ExpirationDate,
            });
            await _context.SaveChangesAsync();
        }

        /// <summary>
        /// <para>Resume: Asynchronous methods to update a kit</para>
        /// </summary>
        /// <param name="upkit">UpdateKitDTO</param>
        public async Task UpdateKitAsync(UpdateKitDTO upkit)
        {
            var KitModel = await GetKitByIdAsync(upkit.Id);
            KitModel.Name = upkit.Name;
            KitModel.ProductClass = upkit.ProductClass;
            KitModel.Price = upkit.Price;
            KitModel.ExpirationDate = upkit.ExpirationDate;

            _context.Kits.Update(KitModel);
            await _context.SaveChangesAsync();
        }

        /// <summary>
        /// <para>Resume: Asynchronous methods to get all kits by search</para>
        /// </summary>
        /// <param name="namekit"></param>
        /// <param name="productClass"></param>
        /// <param name="price"></param>
        /// <returns>List</returns>
        public async Task<List<KitModel>> GetAllBySearchAsync(double price, string namekit, string productClass)
        {
            switch (price, namekit, productClass)
            {
                case (_, null, null):
                    return await _context.Kits
                        .Where(k => k.Price == price)
                        .ToListAsync();
                case (0.0, _, null):
                    return await _context.Kits
                        .Where(k => k.Name.Contains(namekit))
                        .ToListAsync();
                case (0.0, null, _):
                    return await _context.Kits
                        .Where(k => k.ProductClass.Contains(productClass))
                        .ToListAsync();
                case (_, _, null):
                    return await _context.Kits
                        .Where(k => k.Price == price & k.Name.Contains(namekit))
                        .ToListAsync();
                case (0.0, _, _):
                    return await _context.Kits
                        .Where(k => k.Name.Contains(namekit) & k.ProductClass.Contains(productClass))
                        .ToListAsync();
                case (_, _, _):
                    return await _context.Kits
                        .Where(k => k.Price == price & k.Name.Contains(namekit) & k.ProductClass.Contains(productClass))
                       .ToListAsync();
            }
        }

        /// <summary>
        /// <para>Resume: Asynchronous methods to get all kits</para>
        /// </summary>
        /// <return>List</return>
        public async Task<List<KitModel>> GetAllKitsAsync()
        {
            return await _context.Kits.ToListAsync();
        }

        /// <summary>
        /// <para>Resume: Asynchronous methods to delete kit</para>
        /// </summary>
        /// <param name="id">Id by kit</param>
        public async Task DeleteKitAsync(int id) 
        { 
            _context.Kits.Remove(await GetKitByIdAsync(id));
            await _context.SaveChangesAsync();
        }
        #endregion Methods
    }
}





