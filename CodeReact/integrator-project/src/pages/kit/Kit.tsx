import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Kit.css';
import { useNavigate } from 'react-router';
import useLocalStorage from 'react-use-localstorage';

function Kit() {
    return (
      <div className="wrapper" >
        <Card 
          img="https://cdn.discordapp.com/attachments/966414382747754577/981608310237184080/lum3n-RYqO8DhPg68-unsplash.jpg"
          title="Kit Feira"
          description="Texto descrição do Kit"
        />
  
        <Card
          img="https://cdn.discordapp.com/attachments/966414382747754577/981609889539457024/phuc-long-aqrIcYonB-o-unsplash.jpg "
          title="Kit Básico"
          description="Texto descrição do Kit"
        />
  
        <Card
          img="https://cdn.discordapp.com/attachments/966414382747754577/981609440740524043/dose-juice-ocnsb17U6FE-unsplash.jpg"
          title="Kit Higiene"
          description="Texto descrição do Kit"
        />
      </div>
    );
  }
  
  function Card(properties: any) {
    return (
      <div className="card">
        <div className="cardBody">
          <img src={properties.img} className="cardImage" />
          <h2 className="cardTitle">{properties.title}</h2>
          <p className="cardDescription">{properties.description}</p>
        </div>
        <button className="cardBtn">Compre</button>
      </div>
    );
  }


export default Kit;