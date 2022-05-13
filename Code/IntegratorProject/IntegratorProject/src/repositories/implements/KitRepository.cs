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
    /// <para>Resume> Creating Kit Implements</para>
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
        public async Task<KitModel> GetKitByIdAsync(int id)
        {
            return await _context.Kits.FirstOrDefaultAsync(u => u.Id == id);
        }

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
        public async Task<List<KitModel>> GetAllBySearchAsync(string namekit, string productClass, double price)
        {
            switch (namekit, productClass, price)
            {
                case (null, null, 0):
                    return await _context.Kits
                        .ToListAsync();

                case (null, null, _):
                    return await _context.Kits
                        .Where(k => k.Price == price)
                        .ToListAsync();

                case (null, _, _):
                    return await _context.Kits
                        .Where(k => k.ProductClass.Contains(productClass) & k.Price == price)
                        .ToListAsync();

                case (_, null, _):
                    return await _context.Kits
                        .Where(k => k.Name.Contains(namekit) & k.Price == price)
                        .ToListAsync();

                case (_, _, _):
                    return await _context.Kits
                        .Where(k => k.Name.Contains(namekit) & k.ProductClass.Contains(productClass) & k.Price == price)
                        .ToListAsync();
            }
        }
        public async Task<List<KitModel>> GetAllKitsAsync()
        {
            return await _context.Kits.ToListAsync();
        }
        public async Task DeleteKitAsync(int id) 
        { 
            _context.Kits.Remove(await GetKitByIdAsync(id));
            await _context.SaveChangesAsync();
        }


        #endregion Methods
    }
}





