import React from 'react';
import './App.css';
import Navbar from './Components/statics/navbar/Navbar';
import Home from './Components/pages/home/Home'
import AboutUs from './Components/pages/aboutUs/AboutUs'

function App() {
  return (
    <>
      <Home />
        <AboutUs />
    </>
  );
}

export default App;
