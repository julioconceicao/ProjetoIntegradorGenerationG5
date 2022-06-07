import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from "@mui/material";
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#C49C69", height: "80px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://linktr.ee/g5_integratorproject" target="_blank" rel="noopener noreferrer">
                                <EmailIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#C49C69", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >Todos os direitos reservados: Planeta Solidário © 2022</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://trello.com/b/ewpErhaM/projetointegrador" rel="noopener noreferrer">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Trello</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;