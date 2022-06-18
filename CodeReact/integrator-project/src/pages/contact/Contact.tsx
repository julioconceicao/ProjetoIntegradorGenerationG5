import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import './Contact.css';
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";

function Contact() {
    return (
        <>

            <Grid container direction='row' className="fundo-da-pagina-contato">

                <Grid xs={6}className='alinhacontato2'>
                    <div className="alignsidebarohyescontato">
                        <MenuSidebar />
                    </div>
                    <Box paddingX={22.7} >
                        <form >
                            <Typography variant='h3' id='title' component='h3' align='center'>Contato</Typography>

                            <TextField
                                label='Email:' variant='outlined' name='email' margin='normal' fullWidth className='telefone' />

                            <TextField
                                label='Telefone:' variant='outlined' name='telefone' margin='normal' fullWidth className='telefone' />

                            <TextField
                                id='mandesuamensagem' label='Mande sua mensagem:' variant='outlined' name='mandesuamensagem' margin='normal' fullWidth />

                            <Box marginTop={2} textAlign='left'>
                                <Button type='submit' variant='contained' color='primary' className="btnenviar">
                                    Enviar
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
                <Grid xs={6} >
                </Grid>
            </Grid>
        </>
    );
}
export default Contact;