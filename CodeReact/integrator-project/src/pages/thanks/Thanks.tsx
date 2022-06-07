import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Thanks.css';
import MenuNavBar from '../../Components/statics/menuNavBar/MenuNavBar';


function Thanks() {

    return (
        <>
        <div className="backThanks">
            <Grid item xs={12} style={{
                background: `url(https://i.imgur.com/QXVXP1v.png)`,
                backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', backgroundSize: 'cover'
            }}>
                <div className="navbarmenu">
                    <MenuNavBar />
                    <div className="navbarbutton2">
                        <Link to='/Login'>
                            <button> Login</button>
                        </Link>
                        <Link to='/Cadastro'>
                            <button>Cadastre-se</button>
                        </Link>
                    </div>
                </div>
            </Grid>
            </div>
        </>
    );
}
export default Thanks;