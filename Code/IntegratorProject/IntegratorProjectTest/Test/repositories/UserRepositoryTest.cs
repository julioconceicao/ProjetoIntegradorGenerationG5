using IntegratorProject.src.data;
using IntegratorProject.src.dtos;
using IntegratorProject.src.repositories;
using IntegratorProject.src.repositories.implements;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntegratorProjectTest.Test.repositories
{
    [TestClass]
    public class UserRepositoryTest 
    {
        private IntegratorProjectContext _context;
        private IUser _repository;
        
        [TestInitialize]
        public void InitialSettings()
        {
            var opt = new DbContextOptionsBuilder<IntegratorProjectContext>()
            .UseInMemoryDatabase(databaseName: "db_IntergratorProject")
            .Options;
            _context = new IntegratorProjectContext(opt);
            _repository = new UserRepository(_context); 
        }
        [TestMethod]
        public async Task CreateThreeUsersReturnThreeUsersAsync()
        {
            _repository.AddNewUserAsync(
            new NewUserDTO("Joao", "471867894","joao@gmail","123456","Av.psicodaliaaa","",IntegratorProject.src.models.UserModel.Donor));
            _repository.AddNewUserAsync(
            new NewUserDTO("Zimerer", "754898745", "zimerer@gmail", "batatinhafrita", "Av.osasco", "",IntegratorProject.src.models.UserModel.Donor));
            _repository.AddNewUserAsync(
            new NewUserDTO("ONGAjudaNois", "895246321", "ongaajudanois@gmail", "123456", "Av.nosenhora", "",IntegratorProject.src.models.UserModel.Ong));
            
            Assert.AreEqual(3, _context.Users.Count());
        }
    }
}
