import React, { ChangeEvent, useEffect, useState } from "react";
import { Typography, Box, Grid, Button, TextField } from '@mui/material';
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";
import { Link, useNavigate } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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
      showPassword: false,
    }
  );
  const handleChange = (prop: keyof UserLogin) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthenticationDTO({ ...loginDTO, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setAuthenticationDTO({ ...loginDTO, showPassword: !loginDTO.showPassword });
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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
      navigate('/homelog');
    }
  }, [token, navigate]);

  return (
    <>
      <div><MenuSidebar />
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid xs={6}>
            <Box paddingX={20}>
              <form onSubmit={onSubmit}>
                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos'>Entrar</Typography>

                <TextField
                  value={loginDTO.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  id='email' label='Email' variant='outlined' name='email' margin='normal' fullWidth />

                <FormControl  className='root' variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={loginDTO.showPassword ? 'text' : 'password'}
                    value={loginDTO.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {loginDTO.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </FormControl>
                <Box marginTop={2} textAlign='center'>
                  <Button type='submit' variant='contained' color='primary' className="btnCadastrar">
                    Logar
                  </Button>
                </Box>
              </form>
              <Box display='flex' justifyContent='center' marginTop={2}>
                <Box marginRight={1}>
                  <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                </Box>
                <Link to='/cadastro' className="cadastre-se">
                  <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid xs={6} className='imagem'></Grid>
        </Grid>
      </div>
    </>
  );
}
export default Login;