<<<<<<< HEAD
﻿using IntegratorProject.src.data;
using IntegratorProject.src.repositories;
using IntegratorProject.src.repositories.implements;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
=======
﻿using System;
>>>>>>> 80cbbe69e55002fb3f1336b9bff76edb78428b5c
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntegratorProjectTest.Test.repositories
{
<<<<<<< HEAD
    public class OrderRepositoryTest
    {
        private IntegratorProjectContext _context;
        private IOrder _repository;

        [TestInitialize]

        public void InitialSettings()
        {
            var opt = new DbContextOptionsBuilder<IntegratorProjectContext>()
                .UseInMemoryDatabase(databaseName:"db_IntegratorProject")
                .Options();
       
            _context = new IntegratorProjectContext(opt);
            _repository = new OrderRepository(_context);
        }
=======
    internal class OrderRepositoryTest
    {
>>>>>>> 80cbbe69e55002fb3f1336b9bff76edb78428b5c
    }
}
