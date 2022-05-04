using System.Linq;
using IntegratorProject.src.data;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace BlogPessoalTest.Testes.repositorios
{

    [TestClass]
        public class ProjectIntegratorContextTest
    {
        private ProjectIntegratorContext context;

        [TestInitialize]
        public void setup()

        {

            var options = new DbContextOptionsBuilder<ProjectIntegratorContext>()
            .UseInMemoryDatabase(databaseName: "db_IntegratorProject")
            .Options;

            context = new ProjectIntegratorContext(opt);

        }

        [TestMethod]
        public void InsertNewUserInDataBaseReturnUser()
        {
            UserModel user = new UserModel();

            user.Name = "Michelli Oliveira";
            user.CPF_CNPJ = "12345678911";
            user.Email = "michelli@gmail";
            user.Password = "123456";
            user.Adress = "Rua das Flores";
            user.NameAgent= "";

            context.UserModel.Add(user);
            context.SaveChanges();
            Assert.IsNotNull(context.UserModel.FirstOrDefault(u => u.Name == "Michelli Oliveira"));
        }



    }
}