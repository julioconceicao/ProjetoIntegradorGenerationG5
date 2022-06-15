import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { Typography, Box, Grid, TextField } from '@mui/material';
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";
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
  const [token, setToken] = useLocalStorage('token');
  const [id, setId] = useLocalStorage('id');

  let navigate = useNavigate();

  function goLogout() {
    setToken('')
    setId('')
    alert("Usuário deslogado")
    navigate('/login')
  }

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
          <div>
            <button onClick={goLogout} className="navbarbutton1"> Logout</button>
          </div>
        </div>
      </Grid>
    </>
  );
}
export default Ong;
