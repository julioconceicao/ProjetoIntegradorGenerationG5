import React, { ChangeEvent, useEffect, useState } from "react";
import { Typography, Box, Grid, Button, TextField } from '@mui/material';
import MenuNavBar from "../../Components/statics/menuNavBar/MenuNavBar";
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import { login } from "../../services/Services"
import UserLogin from "../../models/UserLogin"
import useLocalStorage from "react-use-localstorage";

function Login() {

  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');

  const [loginDTO, setAuthenticationDTO] = useState<UserLogin>(
    {
      email: "",
      password: "",
    }
  );

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setAuthenticationDTO({
      ...loginDTO,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/api/Authentication`, loginDTO, setToken);
      alert('Logado');
    } catch (error) {
      alert('Email ou senha incorretos');
    }
  }

  useEffect(() => {
    if (token !== '') {
      navigate('/home');
    }
  }, [token, navigate]);

  return (
    <>
     <MenuNavBar />
      <Grid container direction='row' justifyContent='center' alignItems='center'> 
        <Grid xs={6}>
          <Box paddingX={20}>
            <form onSubmit={onSubmit}>
              <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos'>Entrar</Typography>

              <TextField
                value={loginDTO.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth />

              <TextField
                value={loginDTO.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id='password' label='password' variant='outlined' name='password' margin='normal' type='password' fullWidth />

              <Box marginTop={2} textAlign='center' >
                <Button  type='submit' variant='contained' style={{ borderColor: "black", backgroundColor: "#C3935E", color: "#fff" }}>
                  Logar
                </Button>
              </Box>
            </form>
            <Box display='flex' justifyContent='center' marginTop={2}>
              <Box marginRight={1}>
                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
              </Box>
              <Link to='/cadastrousuario' className="textos1">
                <Typography variant='subtitle1' gutterBottom align='center' fontWeight="bold" >Cadastre-se</Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} className='imagem'>
        </Grid>
      </Grid>
    </>
  );
}
export default Login;