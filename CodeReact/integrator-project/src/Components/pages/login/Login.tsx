import React from "react";
import { Typography, Box, Grid, Button, TextField } from '@mui/material';
import "./Login.css";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <Grid className="foto" >
      <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid alignItems='center' xs={6}>
            <Box paddingX={15}>
            
                <form >
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center'className='textos1'>Entrar</Typography>
                    <TextField id='Usuario' label='Usuário' variant='outlined' name='Usuário' margin='normal' fullWidth />
                    <TextField id='Senha' label='Senha' variant='outlined' name='Senha' margin='normal' type='password'fullWidth />
                    <Box marginTop={2} textAlign='center'> 
                    <Link to='/Home' className='decorator'>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                    </Link>
                    </Box>
                </form>
             
                
                <Box display='flex' justifyContent='center' marginTop={2}>
                    <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                    </Box>
                    <Link to='/cadastro'> 
                        <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                    </Link>      
                </Box>
            </Box>
        </Grid>
    </Grid>

      </Grid>
    </>


  );
}
export default Login;