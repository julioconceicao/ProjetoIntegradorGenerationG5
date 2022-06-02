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
                        <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='cpf' label='cpf' variant='outlined' name='cpf' margin='normal' type='cpf' fullWidth />
                        <TextField id='email' label='email' variant='outlined' name='email' margin='normal' type='email' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField id='endereço' label='endereço' variant='outlined' name='endereço' margin='normal' fullWidth />
                        <TextField id='nomeAgente' label='nomeAgente' variant='outlined' name='nomeAgente' margin='normal' fullWidth />
                        <TextField id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <TextField id='tipo' label='tipo' variant='outlined' name='tipo' margin='normal' type='usertype' fullWidth />

                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Box marginY={2} textAlign='center'>
                                <Link to='/' className='text-decorator-none'>
                                    <Button variant='outlined' className='btnCancel'>
                                        Cancelar
                                    </Button>
                                </Link>
                            </Box>
                            <Box marginY={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
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