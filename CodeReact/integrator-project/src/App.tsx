import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './pages/registration/Registration';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Team from './pages/team/Team';
import AboutUs from './pages/aboutUs/AboutUs';
import Kit from './pages/kit/Kit';
import Thanks from './pages/thanks/Thanks';
import Homelog from './pages/home/Homelog';
import CreateOrder from './Components/orders/createOrder/CreateOrder';
import Contact from './pages/contact/Contact';
import Donation from './pages/donation/Donation';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/homelog' element={<Homelog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Registration />} />
          <Route path='/donation' element={<Donation />} />
          <Route path='/sobrenos' element={<AboutUs />} />
<<<<<<< HEAD
          <Route path='/team' element={<Team />} />          
=======
          <Route path='/team' element={<Team />} />
>>>>>>> 53517a5295f78812d0557f4523a75c45787ddd9e
          <Route path='/kits' element={<Kit />} />
          <Route path='/thanks' element={<Thanks />} />
          <Route path="/Order" element={<CreateOrder />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router >
    </>
  );
}

export default App;