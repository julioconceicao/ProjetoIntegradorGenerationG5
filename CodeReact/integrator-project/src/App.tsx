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
<<<<<<< HEAD
import Home2 from './pages/home/Home2'
=======
import ListOrder from './Components/kits/listKits/ListKit';
import Home2gambiarra from './pages/home/Home2gambiarra'
>>>>>>> 0a69b10442d955fc8e56eadf81089a595c261ae5

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
<<<<<<< HEAD
          <Route path='/cadastro' element={<Registration />} />
          <Route path='/Home2' element={<Home2 />} />
          <Route path='/sobrenos' element={<AboutUs />} />
          <Route path='/kits' element={<Kit />} />
=======
          <Route path='/registration' element={<Registration />} />
          <Route path='/home2gambiarra' element={<Home2gambiarra />} />
          <Route path='/sobrenos' element={<AboutUs />} />
          <Route path='/kits' element={<Kit />} />
          <Route path='/team' element={<Team />} />
>>>>>>> 0a69b10442d955fc8e56eadf81089a595c261ae5
        </Routes>
        <Footer />
      </Router >
    </>
  );
}

export default App;