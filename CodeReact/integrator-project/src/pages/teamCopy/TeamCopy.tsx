import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import "./TeamCopy.css";
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";
import Footer from '../../Components/statics/footer/Footer';

function Team() {
    return (
        <>
        <h1 color='red'>Página em manutenção</h1>
            <Grid item xs={12} className='body'>
                <MenuSidebar />

                <h1 className='team-title'>Equipe Desenvolvedora - Planeta Solidário</h1>
                <Grid className='all-cards'>

                    {/* João Victor*/}
                    <Card sx={{ maxWidth: 400, maxHeight: 600 }} className='maincontainer'>
                        <CardMedia className='card-img'
                            component="img"
                            alt="JoaoPic"
                            image="https://cdn.discordapp.com/attachments/966414382747754577/981948401283387423/JOAO_VICTOR_MENEZES_DE_SOUZA-removebg-preview.png"
                        />
                        <CardContent className='cardcontent'>
                            <Typography gutterBottom variant="h4" component="div" className='nameFont' align='center'>
                                João M. de Souza
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" className='titleFont' align='center'>
                                Full-Stack Developer
                            </Typography>


                            <Box className='icons'>
                                <a className='avataricon' href="https://www.linkedin.com/in/joaovictormenezesdesouza/" target="_blank">
                                    <LinkedInIcon className='redes' />
                                </a>
                                <a className='avataricon' href="https://github.com/Joaoms98" target="_blank">
                                    <GitHubIcon className='redes' />
                                </a>
                            </Box>
                        </CardContent>
                    </Card>

                    {/* José Vinicius */}
                    <Card sx={{ maxWidth: 400 }} className='maincontainer'>
                        <Box className="card">
                            <Box className='front'>
                                <CardMedia className='card-img'
                                    component="img"
                                    alt="JosePic"
                                    image="https://cdn.discordapp.com/attachments/966414382747754577/981948403233722428/JOSE_VINICIUS_SILVA_DE_SOUZA-removebg-preview.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                        José Vinicius S. de Souza
                                    </Typography>

                                    <h5>Full-stack developer</h5>
                                </CardContent>
                                <Box className='icons'>
                                    <h5>Links:</h5>
                                    <a className='avataricon' href="https://www.linkedin.com/in/josevinicius53/" target="_blank">
                                        <LinkedInIcon className='redes' />
                                    </a>
                                    <a className='avataricon' href="https://github.com/Josevinicius53" target="_blank">
                                        <GitHubIcon className='redes' />
                                    </a>
                                </Box>
                            </Box>

                            <Box className='back'>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                        José Vinicius S. de Souza
                                    </Typography>
                                    <ul className='infos'>
                                        <li>Desenvolvedor Web- Full-stack- Jr</li>
                                        <li>Tecnologo em Análise e Desenvolvimento de Sistemas</li>
                                        <li>Movido pela curiosidade</li>
                                        <li>Soft-skills: Persistência e proatividade</li>
                                    </ul>

                                </CardContent>
                            </Box>
                        </Box>
                    </Card>

                    {/* Julio Conceição*/}
                    <Card sx={{ maxWidth: 400 }} className='maincontainer'>
                        <Box className="card">
                            <Box className='front'>
                                <CardMedia className='card-img'
                                    component="img"
                                    alt="JulioPic"
                                    image="https://cdn.discordapp.com/attachments/966414382747754577/981948402826899466/JULIO_CESAR_GONCALVES_CONCEICAO-removebg-preview.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                        Julio César G. Conceição
                                    </Typography>

                                    <h5>Full-stack developer</h5>
                                </CardContent>
                            </Box>

                            <Box className='back'>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                        Julio César G. Conceição
                                    </Typography>
                                    <ul className='infos'>
                                        <li>DEV. Jr.- C#/ Entity Framework/ ASP.NET/ ReactJS</li>
                                        <li>Cursando: BC&T e Ciência da Computação na Universidade Federal do ABC (UFABC)</li>
                                        <li>Idioma: Inglês- Escrita, fala e compreensão</li>
                                        <li>Responsável, proativo e um bom co-worker</li>
                                    </ul>
                                    <Box className='icons'>
                                        <h5>Links:</h5>
                                        <a className='avataricon' href="https://www.linkedin.com/in/juliocesargoncalvesconceicao/" target="_blank">
                                            <LinkedInIcon className='redes' />
                                        </a>
                                        <a className='avataricon' href="https://github.com/julioconceicao" target="_blank">
                                            <GitHubIcon className='redes' />
                                        </a>
                                    </Box>
                                </CardContent>
                            </Box>
                        </Box>
                    </Card>

                    {/* Lethicya Lopes*/}
                    <Card sx={{ maxWidth: 400 }} className='maincontainer'>
                        <Box className="card">
                            <Box className='front'>
                                <CardMedia className='card-img'
                                    component="img"
                                    alt="LethLopesPic"
                                    image="https://cdn.discordapp.com/attachments/966414382747754577/981948402558455808/LETHICYA_DA_SILVA_LOPES-removebg-preview.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                        Lethicya Lopes
                                    </Typography>

                                    <h5>Full-stack developer</h5>
                                </CardContent>
                            </Box>

                            <Box className='back'>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                        Lethicya Lopes
                                    </Typography>
                                    <ul className='infos'>
                                        <li>Dev .NET Junior Fullstack - C#/ SQL Server/ASP.NET/ React</li>
                                        <li>Idioma: Inglês Fluente</li>
                                        <li>Soft-skills:  Boa comunicação, proatividade, trabalho em equipe, organização e foco.</li>
                                    </ul>
                                    <Box className='icons'>
                                        <h5>Links:</h5>
                                        <a className='redes' href="https://www.linkedin.com/in/lethicyaslopes/" target="_blank">
                                            <LinkedInIcon className='redes' />
                                        </a>
                                        <a className='redes' href="https://github.com/LethicyasLopes" target="_blank">
                                            <GitHubIcon className='redes' />
                                        </a>
                                    </Box>
                                </CardContent>
                            </Box>
                        </Box>
                    </Card>

                    {/* Letícia Zimerer*/}
                    <Card sx={{ maxWidth: 400 }} className='maincontainer'>
                        <Box className="card">
                            <Box className='front'>
                                <CardMedia className='card-img'
                                    component="img"
                                    alt="ZimererPic"
                                    image="https://cdn.discordapp.com/attachments/966414382747754577/981948402269061240/LETICIA_ZIMERER_FORNAROLO-removebg-preview.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                        Letícia Z. Fornarolo
                                    </Typography>

                                    <h5>Full-stack developer</h5>
                                </CardContent>
                            </Box>

                            <Box className='back'>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                        Letícia Z. Fornarolo
                                    </Typography>
                                    <ul className='infos'>
                                        <li>Dev .NET Junior Fullstack - C#/ SQL Server/ASP.NET/ React</li>
                                        <li>Formada em Design e em transição de carreira para minha verdadeira paixão, a Tecnologia</li>
                                        <li>Soft Skills: Proativa e em constante aprendizado.</li>
                                        <li>Inglês intermediário</li>
                                    </ul>
                                    <Box className='icons'>
                                        <h5>Links:</h5>
                                        <a className='avataricon' href="https://www.linkedin.com/in/leticiazimerer/" target="_blank">
                                            <LinkedInIcon className='redes' />
                                        </a>
                                        <a className='avataricon' href="https://github.com/leticiazimerer" target="_blank">
                                            <GitHubIcon className='redes' />
                                        </a>
                                    </Box>
                                </CardContent>
                            </Box>
                        </Box>
                    </Card>

                    {/* Matheus Rodrigues*/}
                    <Card sx={{ maxWidth: 400 }} className='maincontainer'>
                        <Box className="card">
                            <Box className='front'>
                                <CardMedia className='card-img'
                                    component="img"
                                    alt="MatheusPic"
                                    image="https://cdn.discordapp.com/attachments/966414382747754577/981948401958674482/MATHEUS_RODRIGUES_DA_SILVA-removebg-preview.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                        Matheus R. da Silva
                                    </Typography>

                                    <h5>Full-stack developer</h5>
                                </CardContent>
                            </Box>

                            <Box className='back'>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                        Matheus R. da Silva
                                    </Typography>
                                    <ul className='infos'>
                                        <li>Developer .Net Júnior Fullstack </li>
                                        <li>ASP.NET Core, C#, SQL Server, SCRUM</li>
                                        <li>Português e inglês</li>
                                    </ul>
                                    <Box className='icons'>
                                        <h5>Links:</h5>
                                        <a className='avataricon' href="https://www.linkedin.com/in/matheusrodriguesdasilva23/" target="_blank">
                                            <LinkedInIcon className='redes' />
                                        </a>
                                        <a className='avataricon' href="https://github.com/MatheusRodriguesSilva" target="_blank">
                                            <GitHubIcon className='redes' />
                                        </a>
                                    </Box>
                                </CardContent>
                            </Box>
                        </Box>
                    </Card>

                    {/* Michelli O. Cordeiro */}
                    <Card sx={{ maxWidth: 400 }} className='maincontainer'>
                        <Box className="card">
                            <Box className='front'>
                                <CardMedia className='card-img'
                                    component="img"
                                    alt="MichelliPic"
                                    image="https://cdn.discordapp.com/attachments/966414382747754577/981948401748934666/MICHELLI_OLIVEIRA_CORDEIRO-removebg-preview.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                        Michelli O. Cordeiro
                                    </Typography>

                                    <h5>Full-stack developer</h5>
                                </CardContent>
                            </Box>

                            <Box className='back'>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                        Michelli O. Cordeiro
                                    </Typography>
                                    <ul className='infos'>
                                        <li>Formada em Administração de empresas .</li>
                                        <li>Cursando Análise e desenvolvimento de sistemas.</li>
                                        <li>Soft skills: comunicativa, organizada e disciplinada.</li>
                                    </ul>
                                    <Box className='icons'>
                                        <h5>Links:</h5>
                                        <a className='avataricon' href="https://www.linkedin.com/in/michellicordeiro/" target="_blank">
                                            <LinkedInIcon className='redes' />
                                        </a>
                                        <a className='avataricon' href="https://github.com/MichelliOCordeiro" target="_blank">
                                            <GitHubIcon className='redes' />
                                        </a>
                                    </Box>
                                </CardContent>
                            </Box>
                        </Box>
                    </Card>

                    {/* Paulo Almeida*/}
                    <Card sx={{ maxWidth: 400 }} className='maincontainer'>
                        <Box className="card">
                            <Box className='front'>
                                <CardMedia className='card-img'
                                    component="img"
                                    alt="PauloPic"
                                    image="https://cdn.discordapp.com/attachments/966414382747754577/981948401509875712/PAULO_VICTOR_ALMEIDA_DE_SOUSA-removebg-preview.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                        Paulo Almeida
                                    </Typography>

                                    <h5>Full-stack developer</h5>
                                </CardContent>
                            </Box>

                            <Box className='back'>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefont'>
                                        Paulo Almeida
                                    </Typography>
                                    <ul className='infos'>
                                        <li>Full Stack Developer JR. | .NET | REACT | SQL |</li>
                                        <li>Inglês intermediário</li>
                                        <li>Softskills: Persistência, trabalho em equipe e curiosidade</li>
                                        <li>Habilidades: Contabilidade</li>
                                    </ul>
                                    <Box className='icons'>
                                        <h5>Links:</h5>
                                        <a className='avataricon' href="https://www.linkedin.com/in/almeidaapauloo/" target="_blank">
                                            <LinkedInIcon className='redes' />
                                        </a>
                                        <a className='avataricon' href="https://github.com/AlmeidaaPauloo" target="_blank">
                                            <GitHubIcon className='redes' />
                                        </a>
                                    </Box>
                                </CardContent>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
            </Grid >

        </>
    );
}

export default Team;