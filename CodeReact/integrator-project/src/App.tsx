import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/statics/navbar/Navbar';
import Registration from '../src/Components/pages/registration/Registration';
import Home from './Components/pages/home/Home';
import Footer from './Components/statics/footer/Footer'
import Login from './Components/pages/login/Login';
import Team from './Components/pages/team/Team'



function App() {
  return (
    <>
<<<<<<< HEAD
    
=======

      <Home />
      
>>>>>>> 4ad5fde7495c1fb06846e8b9558539c75f06075f
      <Router>

          <Routes>
            <Route path='/' element={<Home />} />
            
            <Route path='/login' element={ <Login />} />

            <Route path='/cadastro' element={ <Registration />} />
             
          </Routes>
          <Team/>
          <Footer />
      </Router >

    </>
  );
}
export default App;
