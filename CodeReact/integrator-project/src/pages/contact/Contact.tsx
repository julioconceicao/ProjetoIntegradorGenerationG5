import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import React from 'react';
import './Contact.css';
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";
import Footer from '../../Components/statics/footer/Footer';

function Contact() {
    return (
        <>
            <Grid item xs={12} style={{
                background: `url(https://i.imgur.com/LzWtT0n.jpg)`,
                backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', backgroundSize: 'cover'
            }}>

                <div className="navbarmenu100">
                    <MenuSidebar />
                    <div className="navbarbutton100">
                        <Link to='/Login'>
                            <button> Login</button>
                        </Link>
                        <Link to='/Cadastro'>
                            <button>Cadastre</button>
                        </Link>
                    </div>
                </div>
                <div className='alinharcontato'>
                    <Grid xs={6}>
                        <form>
                            <Typography variant='h3' id='title' component='h3' align='center'>Contato</Typography>

                            <TextField
                                id='telefone' label='Telefone:' variant='outlined' name='telefone' margin='normal' fullWidth />

                            <TextField
                                id='email' label='Email:' variant='outlined' name='email' margin='normal' fullWidth />

                            <TextField
                                id='mandesuamensagem' label='Mande sua mensagem:' variant='outlined' name='mandesuamensagem' margin='normal' fullWidth />

                            <Box marginTop={2} textAlign='left'>
                                <Button type='submit' variant='contained' color='primary' className="login">
                                    Enviar
                                </Button>
                            </Box>
                        </form>
                    </Grid>
                </div>
            </Grid>
            <Footer />
        </>
    );
}
export default Contact;