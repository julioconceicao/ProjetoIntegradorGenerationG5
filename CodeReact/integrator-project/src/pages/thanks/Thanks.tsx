import React from "react";
import { Link } from 'react-router-dom';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./Thanks.css";
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";


function Thanks() {

    return (
        <>
        <div className="backThanks">
            <Grid item xs={12} style={{
                background: `url(https://i.imgur.com/QXVXP1v.png)`,
                backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', backgroundSize: 'cover'
            }}>
                <div className="thanksnav">
                    <MenuSidebar />
                    <div className="tanksbutton">
                        <Link to='/Login'>
                            <button> Login</button>
                        </Link>
                        <Link to='/Cadastro'>
                            <button>Cadastre</button>
                        </Link>
                    </div>
                </div>
            </Grid>
        </div>
        </>
    );
}
export default Thanks;