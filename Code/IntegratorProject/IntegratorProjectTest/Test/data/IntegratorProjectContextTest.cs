using System.Linq;
using IntegratorProject.src.data;
using IntegratorProject.src.models;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace IntegratorProjectTest.Test.data
{
    [TestClass]
    public class IntegratorProjectContextTest
    {
        private IntegratorProjectContext context;

        [TestInitialize]
        public void setup()
        {
            var opt = new DbContextOptionsBuilder<IntegratorProjectContext>()
            .UseInMemoryDatabase(databaseName:"db_IntegratorProject")
            .Options;
    
            context = new IntegratorProjectContext(opt);
        }

        [TestMethod]
        public void InsertNewUserInDataBaseReturnUser()
        {
            UserModel user = new UserModel();

            user.Name = "Michelli Oliveira";
            user.CPF_CNPJ = "123";
            user.Email = "michelli@gmail";
            user.Password = "123456";
            user.Adress = "Rua das Flores";
            user.NameAgent= "";

            context.Users.Add(user);
            context.SaveChanges();
            Assert.IsNotNull(context.Users.FirstOrDefault(u => u.Name == "Michelli Oliveira"));
        }
        [TestMethod]
        public void InsertNewUserInDataBaseReturnEmail()
        {
            UserModel user = new UserModel();

            user.Name = "Michelli Oliveira";
            user.CPF_CNPJ = "123";
            user.Email = "michelli@gmail";
            user.Password = "123456";
            user.Adress = "Rua das Flores";
            user.NameAgent = "";

            context.Users.Add(user);
            context.SaveChanges();
            Assert.IsNotNull(context.Users.FirstOrDefault(u => u.Email == "michelli@gmail"));
        }
    }
}