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
            .UseInMemoryDatabase(databaseName: "db_IntergratorProject")
            .Options;
            _context = new IntegratorProjectContext(opt);
            _repository = new OrderRepository(_context);
        }

        [TestMethod]

        public void CreateTwoOrdersReturnTwoOrders()
        {
            _repository.AddNewOrder(
            new NewOrderDTO("grupo5@email.com",1));
            _repository.AddNewOrder(
            new NewOrderDTO("generation@email.com",2));

            Assert.AreEqual(2, _context.Orders.Count());
        }
    }
}
