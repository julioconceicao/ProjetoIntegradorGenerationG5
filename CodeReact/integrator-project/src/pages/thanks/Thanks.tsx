import React from "react";
import { Link } from 'react-router-dom';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./Thanks.css";
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";
import Footer from "../../Components/statics/footer/Footer";


function Thanks() {

    return (
        <>
        <div className="backThanks">
            <Grid item xs={12} style={{
                background: `url(https://i.imgur.com/Me47fhL.png)`,
                backgroundRepeat: 'no-repeat', width: '1500px', height: '100vh', backgroundSize: 'cover'
            }}>
                <div className="thanksnav">
                    <MenuSidebar />
                </div>
            </Grid>
        </div>
        </>
    );
}
export default Thanks;