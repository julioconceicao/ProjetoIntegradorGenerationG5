import React from "react";
import { AppBar, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuNavBar from "../../Components/statics/menuSidebar/MenuSidebar";
import "./gallery.min.css";
import "./gallery.theme.css";

function Purpose() {
  return (
    <div id='purpose'>
      <Grid item xs={12} style={{
        background: 'url(https://i.imgur.com/DLWHlqe.png)',
        backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', backgroundSize: 'cover'
      }}>
        <AppBar position="sticky" style={{ background: 'transparent', boxShadow: 'none'}}>
        <div className="navbarmenu">
          <MenuNavBar />
        </div>
        </AppBar>
        <div className="centerabout">
          <div className="gallery autoplay items-3">

            <div id="item-1" className="control-operator"></div>
            <div id="item-2" className="control-operator"></div>
            <div id="item-3" className="control-operator"></div>

            <figure className="item">
              <h1> <img src="https://i.imgur.com/pZEtAI6.png" width="100%"/></h1>
            </figure>
            <figure className="item">
              <h1><img src="https://i.imgur.com/DsyCFmP.png" width="100%" /></h1>
            </figure>
            <figure className="item">
              <h1><img src="https://i.imgur.com/2fbJEdw.png" width="100%" /></h1>
            </figure>

            <div className="controls">
              <a href="#item-1" className="control-button">.</a>
              <a href="#item-2" className="control-button">.</a>
              <a href="#item-3" className="control-button">.</a>
              <a href="#item-4" className="control-button">.</a>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default Purpose;