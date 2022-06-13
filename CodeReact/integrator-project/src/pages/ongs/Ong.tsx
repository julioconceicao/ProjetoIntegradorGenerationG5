import React, { ChangeEvent, useEffect, useState } from "react";
import { Typography, Box, Grid, Button, TextField } from '@mui/material';
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import "./Ong.css";
import useLocalStorage from "react-use-localstorage";

const currencies = [
  {
    value: 'REAL',
    label: 'kitId',
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
              id="outlined-select-currency"
              select
              label="Select"
              value={currency}
              onChange={handleChange}
              helperText="Please select your Kit"
              variant="outlined"
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