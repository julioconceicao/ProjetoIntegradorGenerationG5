using IntegratorProject.src.data;
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

    }
}
