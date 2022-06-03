import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/statics/navbar/Navbar';
import Registration from '../src/Components/pages/registration/Registration';
import Home from './Components/pages/home/Home'
<<<<<<< HEAD
import Kit from './pages/kit/Kit';
=======
import Footer from './Components/statics/footer/Footer'
import Login from './Components/pages/login/Login';

>>>>>>> 78c7f49112cd7e917ed404b6ed361aacd8be884f

function App() {
  return (
    <>
<<<<<<< HEAD
      <Home />
      <Kit />
=======
      <Router>

          <Routes>
            <Route path='/' element={<Home />} />
            
            <Route path='/login' element={ <Login />} />

            <Route path='/cadastro' element={ <Registration />} />
             
          </Routes>
          <Footer />
      </Router >
>>>>>>> 78c7f49112cd7e917ed404b6ed361aacd8be884f
    </>
  );
}
export default App;
