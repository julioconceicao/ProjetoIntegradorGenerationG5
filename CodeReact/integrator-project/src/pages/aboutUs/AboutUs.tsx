import React from "react";
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuNavBar from "../../Components/statics/menuSidebar/MenuSidebar";
import "./gallery.min.css";
import "./gallery.theme.css";

function AboutUs() {
  return (
    <>
      <Grid item xs={12} style={{
        background: 'url(https://i.imgur.com/9IOxMwE.png)',
        backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', backgroundSize: 'cover'
      }}>
        <div className="navbarmenu">
          <MenuNavBar />
          <div className="navbarbuttonaboutus">
            <Link to='/Login'>
              <button> Login</button>
            </Link>
            <Link to='/Cadastro'>
              <button>Cadastre</button>
            </Link>
          </div>
        </div>
        <div className="gallery autoplay items-3">

          <div id="item-1" className="control-operator"></div>
          <div id="item-2" className="control-operator"></div>
          <div id="item-3" className="control-operator"></div>

          <figure className="item">
            <h1> <img src="https://i.imgur.com/RBm9VZH.png" width="1150px" /></h1>
          </figure>
          <figure className="item">
            <h1><img src="https://i.imgur.com/SlU2IOX.png" width="1150px" /></h1>
          </figure>
          <figure className="item">
            <h1><img src="https://i.imgur.com/d7uvvtn.png" width="1150px" /></h1>
          </figure>

          <div className="controls">
            <a href="#item-1" className="control-button">.</a>
            <a href="#item-2" className="control-button">.</a>
            <a href="#item-3" className="control-button">.</a>
            <a href="#item-4" className="control-button">.</a>
          </div>
        </div>
      </Grid>
    </>
  );
}

export default AboutUs;