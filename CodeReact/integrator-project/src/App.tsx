import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/statics/navbar/Navbar';
<<<<<<< HEAD
import Home from './Components/pages/home/Home'
import AboutUs from './Components/pages/aboutUs/AboutUs'
=======
import Registration from '../src/Components/pages/registration/Registration';
import Home from './Components/pages/home/Home';
import Footer from './Components/statics/footer/Footer'
import Login from './Components/pages/login/Login';
<<<<<<< HEAD
import Team from './Components/pages/team/Team'
=======

<<<<<<< HEAD

>>>>>>> 4ad5fde7495c1fb06846e8b9558539c75f06075f
>>>>>>> c1d128ca35f45b699eb3aa0bbf1fa4e2d43fde1f

=======
>>>>>>> 25fcfc529fdbec6106b81961bd4f1e552507fd02
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />

<<<<<<< HEAD
      <Router>
        
 
        <Routes>
          <Route path='/home' element={<Home />} />

          <Route path='/login' element={<Login />} />

          <Route path='/cadastro' element={<Registration />} />

        </Routes>
        <Team />
        <Footer />
=======
<<<<<<< HEAD
      <Home />
<<<<<<< HEAD
        <AboutUs />
=======
      
      <Router>
=======
        <Route path="/login" element={<Login />} />
>>>>>>> 25fcfc529fdbec6106b81961bd4f1e552507fd02

        <Route path="/cadastro" element={<Registration />} />

<<<<<<< HEAD
            <Route path='/cadastro' element={ <Registration />} />
             
          </Routes>
          <Footer />
>>>>>>> c1d128ca35f45b699eb3aa0bbf1fa4e2d43fde1f
      </Router >

>>>>>>> 4ad5fde7495c1fb06846e8b9558539c75f06075f
    </>
=======
      </Routes>
      <Footer />
    </Router >
>>>>>>> 25fcfc529fdbec6106b81961bd4f1e552507fd02
  );
}
export default App;
