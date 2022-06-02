import React from "react";
import {Link} from 'react-router-dom';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./Home.css";


function Home() {
    return (
        <>
            <Grid item xs={12} style={{
                background: `url(https://imgur.com/cps58Bf.jpg)`,
                backgroundRepeat:'no-repeat', width: '100%' , height: '100vh' , backgroundSize: 'cover'}}> 
                <div className="navbarmenu">
                    <IconButton edge="start" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                    MENU
                    </Typography>
                    <div className="navbarbutton">
                        <Link to='/Login'>
                            <button> Login</button>
                        </Link>
                        <Link to='/Cadastro'>
                            <button>Cadastre-se</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img className="logo" src="https://imgur.com/fqAed38.png" alt="" width="250"/>
                </div>
            </Grid>
        </>
    );
}
export default Home;