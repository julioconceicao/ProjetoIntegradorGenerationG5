import React from "react";
import { Link } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from "@mui/material";
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="total">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">


                            <a href="https://linktr.ee/g5_integratorproject" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <a href="https://linktr.ee/g5_integratorproject" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a target="_blank" href="https://github.com/julioconceicao/ProjetoIntegradorGenerationG5/issues/new">
                                <Typography variant="subtitle2" gutterBottom className='textos' align="center">Dúvidas ou sugestões? Clique aqui.</Typography>
                            </a>
                        </Box>


                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos'>© 2022 Copyright: Planeta Solidário - Projeto Integrador</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className='textos' align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;