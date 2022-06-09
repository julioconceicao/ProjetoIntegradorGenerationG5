import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Button } from '@material-ui/core';
import {Box} from '@mui/material';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import './CreateOrder.css';

function Cart() {
    return(
    <>
        <Grid item xs={4} className="buy" style={{
            backgroundColor: '',
            backgroundRepeat: 'no-repeat', width: '500px', height: '250px', backgroundSize: 'cover',
            textAlign: 'center',
        }}>
            <Box className='SelectKit'>

            </Box>
            
        </Grid>
    </>
    )
}
export default Cart;