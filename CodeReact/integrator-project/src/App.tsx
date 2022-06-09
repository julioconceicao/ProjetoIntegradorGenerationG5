import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './pages/registration/Registration';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Team from './pages/team/Team';
import TeamCopy from './pages/team copy/TeamCopy';
import AboutUs from './pages/aboutUs/AboutUs';
import ListOrder from './Components/orders/listOrder/ListOrder';
import Cart from './pages/cart/Cart';
import Kit from './pages/kit/Kit';
import Thanks from './pages/thanks/Thanks';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/cadastro' element={<Registration />} />
          {/* <Route path='/order' element={<ListOrder />} /> */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/sobrenos' element={<AboutUs />} />
          <Route path='/sobrenos' element={<AboutUs />} />
          <Route path='/team' element={<Team />} />
          <Route path='/teamCopy' element={<TeamCopy />} />
          <Route path='/kits' element={<Kit />} />
          <Route path='/thanks' element={<Thanks />} />
        </Routes>
      </Router >
    </>
  );
}

export default App;