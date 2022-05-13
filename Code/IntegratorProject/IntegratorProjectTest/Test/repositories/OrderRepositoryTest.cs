using IntegratorProject.src.data;
using IntegratorProject.src.dtos;
using IntegratorProject.src.repositories;
using IntegratorProject.src.repositories.implements;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntegratorProjectTest.Test.repositories
{
    [TestClass]
    public class OrderRepositoryTest
    {
        private IntegratorProjectContext _context;
        private IOrder _repository;

        [TestInitialize]
        public void InitialSettings()
        {
             var opt = new DbContextOptionsBuilder<IntegratorProjectContext>()
            .UseInMemoryDatabase(databaseName: "db_IntegratorProject")
            .Options;
             _context = new IntegratorProjectContext(opt);
             _repository = new OrderRepository(_context);
        }

        [TestMethod]

        public async Task CreateTwoOrdersReturnTwoOrdersAsync()
        {
           await _repository.AddNewOrderAsync(
            new NewOrderDTO("grupo5@email.com",1));
           await _repository.AddNewOrderAsync(
            new NewOrderDTO("generation@email.com",2));

            Assert.AreEqual(2, _context.Orders.Count());
        }
    }
}
