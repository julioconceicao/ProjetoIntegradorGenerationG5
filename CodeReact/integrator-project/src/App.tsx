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


>>>>>>> 4ad5fde7495c1fb06846e8b9558539c75f06075f

function App() {
  return (
    <>

      <Home />
<<<<<<< HEAD
        <AboutUs />
=======
      
      <Router>

          <Routes>
            <Route path='/' element={<Home />} />
            
            <Route path='/login' element={ <Login />} />

            <Route path='/cadastro' element={ <Registration />} />
             
          </Routes>
          <Footer />
      </Router >

>>>>>>> 4ad5fde7495c1fb06846e8b9558539c75f06075f
    </>
  );
}
export default App;
