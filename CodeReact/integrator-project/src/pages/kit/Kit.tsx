import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Grid, Button, AppBar } from '@material-ui/core';
import { Box } from '@mui/material';
import "./Kit.css";
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";


function Kit() {
    return (
        <>
            <Grid item xs={12} style={{
                background: 'url(https://imgur.com/j3CX0QC.png)',
                backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', backgroundSize: 'cover'
            }}>
                <AppBar position="sticky" style={{ background: 'transparent', boxShadow: 'none' }}>
                    <div className="navbarmenu">
                        <MenuSidebar />
                    </div>
                </AppBar>
                <div className='todos-cartões'>
                    {/*Cesta Básica*/}
                    <Card sx={{ maxWidth: 345 }} className='maincontainer'>
                        <Box className="cartões">
                            <Box className='frente'>
                                <CardMedia className='cartão-img'
                                    component="img"
                                    alt="Imagem de uma cesta basica tipicamente brasileira"
                                    image="https://cdn.discordapp.com/attachments/966414382747754577/983461851356594176/original-b884fc81bd2324a672e4b7ced64661b3.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefonte'>
                                        Cesta Básica
                                    </Typography>
                                    <p className="p">R$89,99</p>
                                </CardContent>
                            </Box>

                            <Box className='costas'>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefonte'>
                                        Mais Informações
                                    </Typography>
                                    <ul className='infos'>
                                        <li>Arroz Agulhinha Tipo 1</li>
                                        <li>Óleo de Soja</li>
                                        <li>Feijão Carioca Tipo 1</li>
                                        <li>Sardinha</li>
                                        <li>Macarrão Espaguete/Parafuso</li>
                                        <li>Molho de Tomate Pronto</li>
                                        <li>Café Torrado e Moído a Vácuo</li>
                                        <li>Farinha de Mandioca Temperada</li>
                                        <li>Sal Refinado</li>
                                        <li>Sabonete</li>
                                        <li>Papel Higiênico 4 X 30</li>
                                        <li>Sabão em Pedra Individual</li>
                                        <li>Creme Dental</li>
                                        <li>Embalagem Papelão</li>
                                        <li>Embalagem Plástica Kit Limpeza</li>
                                    </ul>
                                    <Box >
                                    </Box>
                                </CardContent>
                            </Box>
                        </Box>
                    </Card>

                    {/* Kit Feira */}
                    <Card sx={{ maxWidth: 345 }} className='maincontainer'>
                        <Box className="cartões">
                            <Box className='frente'>
                                <CardMedia className='cartão-img'
                                    component="img"
                                    alt="Imagem de frutas, verduras e legumes tipicamente brasileiros"
                                    image="https://cdn.discordapp.com/attachments/966414382747754577/983461850744238100/david-vazquez-32DLZHRbInw-unsplash.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefonte'>
                                        Kit Feira
                                    </Typography>                               
                                    <p className="p">R$139,99</p>                                                                      
                                </CardContent>                                
                            </Box>

                            <Box className='costas'>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefonte'>
                                        Mais Informações
                                    </Typography>
                                    <ul className='infos'>
                                        <h4>FRUTAS</h4>
                                        <li> 6 Limões</li>
                                        <li> 3 Maçãs</li>
                                        <li> 3 Peras</li>
                                        <li> 1dz de Laranja Pera</li>
                                        <li> 1 kg Banana Nanica ou Prata</li>
                                        <li> 1 Tipo de fruta a escolher </li>
                                        <h4> LEGUMES E VERDURAS</h4>
                                        <li> 1/2 kg Cebola</li>
                                        <li> 1/2 kg Tomate</li>
                                        <li> 1 kg Batata</li>
                                        <li> 1 pc Cenoura ou Vagem</li>
                                        <li> 1 pc Chuchu ou Batata Doce</li>
                                        <li> 1 pc Berinjela ou Beterraba</li>
                                        <li> 1 pc Alho ou Pimentão</li>
                                        <li> 2 mç Alface Lisa ou Crespa</li>
                                        <li> 1 mç Salsa</li>
                                        <li> 1 mç Couve ou Escarola</li>
                                    </ul>
                                </CardContent>
                            </Box>
                        </Box>
                    </Card>

                    {/* Kit Mulher*/}
                    <Card sx={{ maxWidth: 345 }} className='maincontainer'>
                        <Box className="cartões">
                            <Box className='frente'>
                                <CardMedia className='cartão-img'
                                    component="img"
                                    alt="Imagens de produtos especificos para mulheres"
                                    image="https://cdn.discordapp.com/attachments/966414382747754577/983461850341580800/aregEARH.PNG"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefonte'>
                                        Kit Mulher
                                    </Typography>
                                    <p className="p">R$179,99</p>
                                </CardContent>
                            </Box>

                            <Box className='costas'>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='namefonte'>
                                        Mais Informações
                                    </Typography>
                                    <ul className='infos'>
                                        <li> 1 sutiã</li>
                                        <li> 1 escova de dentes</li>
                                        <li> 1 fio dental </li>
                                        <li> 1 sabonete intimo</li>
                                        <li> 1 desodorante</li>
                                        <li> 1 shampoo</li>
                                        <li> 1 condicionador</li>
                                        <li> 1 pacote de cotonete</li>
                                        <li> 1 creme hidratante</li>
                                        <li> 1 pacote de Lenço umedecido</li>
                                    </ul>
                                </CardContent>
                            </Box>
                        </Box>
                    </Card>
                </div>
            </Grid>
        </>
    );
}

export default Kit;