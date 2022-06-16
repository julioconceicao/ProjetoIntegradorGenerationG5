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
import TeamCopy from './pages/teamCopy/TeamCopy';
import ListOng from './pages/ongs/ListOng'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/homelog' element={<Homelog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/teamCopy' element={<TeamCopy />} />
          <Route path='/cadastro' element={<Registration />} />
          <Route path='/donation' element={<Donation />} />
          <Route path='/sobrenos' element={<AboutUs />} />
          <Route path='/team' element={<Team />} />          
          <Route path='/kits' element={<Kit />} />
          <Route path='/thanks' element={<Thanks />} />
          <Route path="/Order" element={<CreateOrder />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/ongs' element={<ListOng/>} />
        </Routes>
      </Router >
    </>
  );
}

export default App;