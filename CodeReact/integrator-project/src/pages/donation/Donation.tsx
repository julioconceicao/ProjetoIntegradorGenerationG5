import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useLocalStorage from "react-use-localstorage";
import './Donation.css';
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";
import Footer from '../../Components/statics/footer/Footer';

function Donation() {  
    return(
    <>
            <Grid item xs={12} className="page" alignItems= 'center' justifyContent='center' style={{
            background: 'url(https://i.imgur.com/9IOxMwE.png)',
            backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', backgroundSize: 'cover',
        }}>
            <MenuSidebar/>                                     
            <div className="title">
                <h3>Doação</h3>
            </div>
        </Grid>       
    </>
    )
}
export default Donation;