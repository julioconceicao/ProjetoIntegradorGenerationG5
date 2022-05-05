using IntegratorProject.src.data;
using IntegratorProject.src.dtos;
using IntegratorProject.src.models;
using System.Collections.Generic;
using System.Linq;

namespace IntegratorProject.src.repositories.implements
{
    public class UserRepository : IUser
    {
        #region atributes
        private readonly IntegratorProjectContext _context;
        #endregion atributes

        #region Constructors
        public UserRepository(IntegratorProjectContext context)
        {
            _context = context;
        }
        #endregion Constructors
        
        #region métods
        public void AddNewUser(NewUserDTO user)
        {
            _context.Users.Add(new UserModel
            {
                Name = user.Name,
                CPF_CNPJ = user.CPF_CNPJ,
                Email = user.Email,
                Adress = user.Adress,
                NameAgent = user.NameAgent,
            });
            _context.SaveChanges();
        }

        public void DeleteUser(int id)
        {
            _context.Users.Remove(GetUserById(id));
            _context.SaveChanges();
        }
        public UserModel GetUserById(int id)
        {
            return _context.Users
                .FirstOrDefault(u => u.Id == id);
        }

        public List<UserModel> GetOngByAdress(string adress)
        {
            throw new System.NotImplementedException();
        }

        public List<UserModel> GetOngByUserType()
        {
            throw new System.NotImplementedException();
        }

        public void UpDateUser(UpDateUserDTO user)
        {
            var userModel = GetUserById(user.Id);
            userModel.Name = user.Name;
            userModel.Password = user.Password;
            userModel.Adress = user.Adress;
            userModel.NameAgent = user.NameAgent;
            _context.Users.Update(userModel);
            _context.SaveChanges();
        }
        #endregion métods
    }
}
