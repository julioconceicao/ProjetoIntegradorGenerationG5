import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Box } from "@mui/material";
import "./Registration.css";

function Registration() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='image2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='text2'>Cadastrar</Typography>
                        <TextField id='Nome' label='Nome' variant='outlined' name='Nome' margin='normal' fullWidth />
                        <TextField id='CPF' label='CPF' variant='outlined' name='CPF' margin='normal' type='CPF' fullWidth />
                        <TextField id='Email' label='Email' variant='outlined' name='Email' margin='normal' type='Email' fullWidth />
                        <TextField id='Senha' label='Senha' variant='outlined' name='Senha' margin='normal' type='password' fullWidth />
                        <TextField id='ConfirmarSenha' label='ConfirmarSenha' variant='outlined' name='ConfirmarSenha' margin='normal' type='password' fullWidth />
                        <TextField id='Endereço' label='Endereço' variant='outlined' name='Endereço' margin='normal' fullWidth />
                        <TextField id='NomeAgente' label='NomeAgente' variant='outlined' name='NomeAgente' margin='normal' fullWidth />
                        <TextField id='Tipo' label='Tipo' variant='outlined' name='Tipo' margin='normal' type='usertype' fullWidth />

                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Box marginY={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='outlined' className='btnCancel'>
                                        Cancelar
                                    </Button>
                                </Link>
                            </Box>
                            <Box marginY={2} textAlign='center'>
                          
                                <Button  type='submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                         
                            </Box>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Registration;