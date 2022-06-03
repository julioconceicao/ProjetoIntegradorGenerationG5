import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import "./Team.css";

function Team() {
    return (
        <>
            <div className='body'>
                <h1 className='equipe'>Equipe Desenvolvedora - Planeta Solidário</h1>
                <div className='all-cards'>

                    {/* João Victor */}
                    <Card sx={{ maxWidth: 345 }} className='card'>
                        <CardMedia className='card-img'
                            component="img"
                            alt="green iguana"
                            image="https://media.discordapp.net/attachments/966414382747754577/981948401283387423/JOAO_VICTOR_MENEZES_DE_SOUZA-removebg-preview.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                João Victor
                            </Typography >
                            <a id='avataricon' href="https://www.linkedin.com/in/joaovictormenezesdesouza/" target="_blank" className='redes'>
                                <LinkedInIcon className='redes' />
                            </a>
                            <a id='avataricon' href=" https://github.com/Joaoms98" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <p></p>
                        </CardContent>
                    </Card>

                    {/* José Vinicuis*/}
                    <Card sx={{ maxWidth: 345 }} className='card'>
                        <CardMedia className='card-img'
                            component="img"
                            alt="green iguana"

                            image="https://cdn.discordapp.com/attachments/966414382747754577/981948403233722428/JOSE_VINICIUS_SILVA_DE_SOUZA-removebg-preview.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                José Vinicius
                            </Typography>
                            <a id='avataricon' href="https://www.linkedin.com/in/jos%C3%A9vinicius/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                            <a id='avataricon' href="https://github.com/Josevinicius53" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <p></p>
                        </CardContent>
                    </Card>

                    {/* Julio Conceição */}
                    <Card sx={{ maxWidth: 345 }} className='card'>
                        <CardMedia className='card-img'
                            component="img"
                            alt="green iguana"
                            image="https://cdn.discordapp.com/attachments/966414382747754577/981948402826899466/JULIO_CESAR_GONCALVES_CONCEICAO-removebg-preview.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                Julio Conceição
                            </Typography>
                            <a id='avataricon' href="https://www.linkedin.com/in/juliocesargoncalvesconceicao/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                            <a id='avataricon' href="https://github.com/julioconceicao" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <p></p>
                        </CardContent>
                    </Card>

                    {/* Lethycia Lopes */}
                    <Card sx={{ maxWidth: 345 }} className='card'>
                        <CardMedia className='card-img'
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://cdn.discordapp.com/attachments/966414382747754577/981948402558455808/LETHICYA_DA_SILVA_LOPES-removebg-preview.png"
                            width="100%"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                Lethicya Lopes
                            </Typography>
                            <a id='avataricon' href="https://www.linkedin.com/in/lethicyaslopes/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                            <a id='avataricon' href="https://github.com/LethicyasLopes" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <p></p>
                        </CardContent>
                    </Card>

                    {/* Letícia Zimerer*/}
                    <Card sx={{ maxWidth: 345 }} className='card'>
                        <CardMedia className='card-img'
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://cdn.discordapp.com/attachments/966414382747754577/981948402269061240/LETICIA_ZIMERER_FORNAROLO-removebg-preview.png"
                            width="100%"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                Letícia Zimerer
                            </Typography>
                            <a id='avataricon' href="https://www.linkedin.com/in/leticiazimerer/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                            <a id='avataricon' href="https://github.com/leticiazimerer" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <p></p>
                        </CardContent>
                    </Card>

                    {/* Matheus Rodrigues */}
                    <Card sx={{ maxWidth: 345 }} className='card'>
                        <CardMedia className='card-img'
                            component="img"
                            alt="green iguana"

                            image="https://cdn.discordapp.com/attachments/966414382747754577/981948401958674482/MATHEUS_RODRIGUES_DA_SILVA-removebg-preview.png"

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                Matheus Rodrigues
                            </Typography>
                            <a id='avataricon' href="https://www.linkedin.com/in/matheusrodriguesdasilva23/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                            <a id='avataricon' href="https://github.com/MatheusRodriguesSilva" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <p></p>
                        </CardContent>
                    </Card>

                    {/* Michelli Oliveira*/}
                    <Card sx={{ maxWidth: 345 }} className='card'>
                        <CardMedia className='card-img'
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://cdn.discordapp.com/attachments/966414382747754577/981948401748934666/MICHELLI_OLIVEIRA_CORDEIRO-removebg-preview.png"
                            width="100%"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                Michelli Oliveira
                            </Typography>
                            <a id='avataricon' href="https://www.linkedin.com/in/michellicordeiro/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                            <a id='avataricon' href="https://github.com/MichelliOCordeiro" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <p></p>
                        </CardContent>
                    </Card>

                    {/* Paulo Amleida*/}
                    <Card sx={{ maxWidth: 345 }} className='card'>
                        <CardMedia className='card-img'
                            component="img"
                            alt="green iguana"

                            image="https://cdn.discordapp.com/attachments/966414382747754577/981948401509875712/PAULO_VICTOR_ALMEIDA_DE_SOUSA-removebg-preview.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                Paulo Almeida
                            </Typography>
                            <a id='avataricon' href="https://www.linkedin.com/in/almeidaapauloo/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                            <a id='avataricon' href="https://github.com/AlmeidaaPauloo" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <p></p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Team;