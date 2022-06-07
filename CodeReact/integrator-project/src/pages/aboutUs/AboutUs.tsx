<<<<<<< HEAD
import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuNavBar from '../../Components/statics/menuNavBar/MenuNavBar';
import './AboutUs.css';
=======
import React from "react";
import "./AboutUs.css";
>>>>>>> bdfb84c6441de006a0f4beeaf126cd736644a80c

function AboutUs() {
    return (
      <>
      <div className="body">
        <div className='container'>
          <input type="radio" name="slider" id="item-1"/>
          <input type="radio" name="slider" id="item-2"/>
          <input type="radio" name="slider" id="item-3"/>
          <div className='cards'>
              <label className="card" htmlFor="item-1" id="song-1">
                <img src="https://imgur.com/cps58Bf.jpg"></img>
              </label>
              <label className="card" htmlFor="item-1" id="song-1">
                <img src="https://imgur.com/cps58Bf.jpg"></img>
              </label>
              <label className="card" htmlFor="item-1" id="song-1">
                <img src="https://imgur.com/cps58Bf.jpg"></img>
              </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;