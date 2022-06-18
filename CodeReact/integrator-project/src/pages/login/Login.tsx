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
import Swal from 'sweetalert2';

function Login() {

  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  const [email, setEmail] = useLocalStorage('email');
  const [type, setType] = useLocalStorage('type');

  const [loginDTO, setAuthenticationDTO] = useState<UserLogin>(
    {
      email: "",
      password: "",
      showPassword: false,
      type: "",
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
      await login(`/api/Authentication`, loginDTO, setToken, setEmail, setType);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuário logado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      alert('Email ou senha incorretos');
    }
  }

  useEffect(() => {
    if (type == 'ONG') {
      navigate('/ongs');
    }
  }, [type, navigate]);

  useEffect(() => {
    if (token !== '') {
      navigate('/homelog');
    }
  }, [token, navigate]);

  return (
    <>

      <Grid container direction='row' className="fundo-da-pagina">
        <Grid xs={6}>
          <div className="alignsidebarohyes">
            <MenuSidebar />
          </div>
          <Box paddingX={22.7}>
            <form onSubmit={onSubmit}>
              <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos'>Entrar</Typography>

              <TextField
                value={loginDTO.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id='email' label='Email' variant='outlined' name='email' margin='normal' fullWidth className="colorbut" />

              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-senha">Senha</InputLabel>
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
                  } className="colorbut"
                  labelWidth={80}

                />
              </FormControl>
              <Box marginTop={2} textAlign='center'>
                <Button type='submit' variant='contained' color='primary' className="logar">
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
        <Grid xs={6} className='imagem'>
        </Grid>
      </Grid>
    </>
  );
}
export default Login;
