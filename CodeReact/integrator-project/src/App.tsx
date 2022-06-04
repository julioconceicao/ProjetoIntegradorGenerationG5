import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/statics/navbar/Navbar';
import Registration from '../src/Components/pages/registration/Registration';
import Home from './Components/pages/home/Home';
import Footer from './Components/statics/footer/Footer'
import Login from './Components/pages/login/Login';
import Team from './Components/pages/team/Team';
import Kit from './pages/kit/Kit';
import AboutUs from './Components/pages/aboutUs/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Registration />} />
</Routes>
<Footer />
</Router >
</>
);
}

export default App;