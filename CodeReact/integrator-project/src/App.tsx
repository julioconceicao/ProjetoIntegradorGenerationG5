import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './pages/registration/Registration';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Team from './pages/team/Team';
import TeamCopy from './pages/teamCopy/TeamCopy';
import AboutUs from './pages/aboutUs/AboutUs';
import Cart from './pages/cart/Cart';
import Kit from './pages/kit/Kit';
import Thanks from './pages/thanks/Thanks';
import Homelog from './pages/home/Homelog';
<<<<<<< HEAD
import CreateOrder from './Components/orders/createOrder/CreateOrder';

=======
import Contact from './pages/contact/Contact';
>>>>>>> a28ad5dae4d74334c08deefcf0e1da01c78a4dd2

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
          <Route path='/cart' element={<Cart />} />
          <Route path='/sobrenos' element={<AboutUs />} />
          <Route path='/team' element={<Team />} />
          <Route path='/teamCopy' element={<TeamCopy />} />
          <Route path='/kits' element={<Kit />} />
          <Route path='/thanks' element={<Thanks />} />
<<<<<<< HEAD
          <Route path="/Order" element={<CreateOrder />} />
=======
          <Route path='/contact' element={<Contact />} />
>>>>>>> a28ad5dae4d74334c08deefcf0e1da01c78a4dd2
        </Routes>
      </Router >
    </>
  );
}

export default App;