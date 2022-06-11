import React, { ChangeEvent, useEffect, useState } from "react";
import { Typography, Box, Grid, Button, TextField } from '@mui/material';
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";
import { Link, useNavigate } from 'react-router-dom';
import "./Ong.css";
import useLocalStorage from "react-use-localstorage";

function Ong() {

  let history = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  const [email, setEmail] = useLocalStorage('email');

  

  return (
    <>
    <div><MenuSidebar />
      <Grid container direction='row' justifyContent='center' alignItems='center'> 
        <Grid xs={6}>          
        <Grid xs={6}></Grid>
      </Grid>
      </Grid>
      </div>
    </>
  );
}
export default Ong;