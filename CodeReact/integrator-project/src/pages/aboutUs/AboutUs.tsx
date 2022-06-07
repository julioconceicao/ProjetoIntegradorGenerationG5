import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuNavBar from '../../Components/statics/menuNavBar/MenuNavBar';
import './AboutUs.css';

function AboutUs() {
    return (
      <>
        <MenuNavBar />
        <div className='body'>
          <Typography variant="h3" gutterBottom color="textPrimary" component="h1" text-align="center" className='titulo'>Sobre nós</Typography>
            <section className='card'>
              <img src="https://i.imgur.com/VRckNLU.png" alt="Missão" width="300px" height="120px" padding-left="20px" />
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='subtitulo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, libero optio eum voluptatibus consectetur expedita aliquam hic. Nihil maxime nobis doloribus perferendis distinctio tempora iusto ullam! Atque obcaecati quasi nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, libero optio eum voluptatibus consectetur expedita aliquam hic. Nihil maxime nobis doloribus perferendis distinctio tempora iusto ullam! Atque obcaecati quasi nam.</Typography>
          </section>

             
          <section className='card'>
              <img src="https://i.imgur.com/S48xRO9.png" alt="Missão" width="200px" height="120px" padding-left="20px" />
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='subtitulo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, libero optio eum voluptatibus consectetur expedita aliquam hic. Nihil maxime nobis doloribus perferendis distinctio tempora iusto ullam! Atque obcaecati quasi nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, libero optio eum voluptatibus consectetur expedita aliquam hic. Nihil maxime nobis doloribus perferendis distinctio tempora iusto ullam! Atque obcaecati quasi nam.</Typography>
          </section>

          <section className='card'>
              <img src="https://i.imgur.com/QjfdjZv.png" alt="Missão" width="150px" height="120px" padding-left="20px" />
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='subtitulo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, libero optio eum voluptatibus consectetur expedita aliquam hic. Nihil maxime nobis doloribus perferendis distinctio tempora iusto ullam! Atque obcaecati quasi nam.Lorem ipaxime nobis doloribus perferendis distinctio tempora iusto ullam! Atque obcaecati quasi nam.</Typography>
          </section>
        
        </div>
        
    </>
  );
}

export default AboutUs;