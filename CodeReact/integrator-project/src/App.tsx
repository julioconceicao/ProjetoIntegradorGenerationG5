import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/statics/navbar/Navbar';
import Registration from './pages/registration/Registration';
import Home from './pages/home/Home';
import Footer from './Components/statics/footer/Footer'
import Login from './pages/login/Login';
import Team from './pages/team/Team';
import Kit from './pages/kit/Kit';
import AboutUs from './pages/aboutUs/AboutUs';
import ListOrder from './Components/orders/listOrder/ListOrder';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Registration />} />
          <Route path='/order' element={<ListOrder />} />
        </Routes>
        <Footer />
      </Router >
    </>
  );
}

export default App;