import React, { ChangeEvent, useEffect, useState } from "react";
import { Typography, Box, Grid, Button, TextField } from '@mui/material';
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MenuItem from '@material-ui/core/MenuItem';
import Home from '../../pages/home/Home';
import "./Ong.css";
import useLocalStorage from "react-use-localstorage";

const currencies = [
  {
    value: '',
    label: '',
  },
];

  function Ong() {
    const [currency, setCurrency] = React.useState('EUR');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrency(event.target.value);
    };
    return (
      <>
        <Grid item xs={12} style={{
          background: `url(https://i.imgur.com/X7h4cHt.png)`,
          backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', backgroundSize: 'cover'
        }}>
          <div className="navbarmenu">
            <MenuSidebar />
          </div>
          <div>
            <TextField   
              select   
              value={currency}
              onChange={handleChange}
              helperText="Please select your Kit"
              variant="outlined"
              className="select"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>  
        </Grid>
      </>
    );
  }
  export default Ong;
 