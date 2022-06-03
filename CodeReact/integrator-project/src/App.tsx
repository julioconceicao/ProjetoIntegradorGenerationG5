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

>>>>>>> 4ad5fde7495c1fb06846e8b9558539c75f06075f

=======
>>>>>>> 25fcfc529fdbec6106b81961bd4f1e552507fd02
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />

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
