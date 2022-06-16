import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './pages/registration/Registration';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Team from './pages/team/Team';
import Purpose from './pages/purpose/Purpose';
import Kit from './pages/kit/Kit';
import Thanks from './pages/thanks/Thanks';
import Homelog from './pages/home/Homelog';
import CreateOrder from './Components/orders/createOrder/CreateOrder';
import Contact from './pages/contact/Contact';
import Donation from './pages/donation/Donation';
import ListOng from './pages/ongs/ListOng'
import SinglePage from './pages/singlePageAplication/SinglePage';
import Footer from './Components/statics/footer/Footer';
import MenuSidebar from './Components/statics/menuSidebar/MenuSidebar';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SinglePage />} />
          <Route path='/home' element={<SinglePage />} />
          <Route path='/homelog' element={<Homelog />} />
          <Route path='/login'  element={<Login />} />
          <Route path='/spapp' element={<SinglePage />} />
          <Route path='/cadastro' element={<Registration />} />
          <Route path='/donation' element={<Donation />} />
          <Route path='/purpose' element={<Purpose />} />
          <Route path='/team' element={<Team />} />          
          <Route path='/kits' element={<Kit />} />
          <Route path='/thanks' element={<Thanks />} />
          <Route path="/Order" element={<CreateOrder />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/ongs' element={<ListOng/>} />
          <Route path='/single' element={<SinglePage/>} />
         </Routes>
        <Footer />
      </Router >
    </>
  );
}

export default App;