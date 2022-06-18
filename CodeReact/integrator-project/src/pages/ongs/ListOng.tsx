import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { Typography, Box, Grid, TextField } from '@mui/material';
import { Card, CardActions, CardContent, Button, AppBar } from '@material-ui/core';
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";
import MenuItem from '@material-ui/core/MenuItem';
import "./Ong.css";
import useLocalStorage from "react-use-localstorage";
import {searchorder} from "../../services/Services";
import Order from "../../models/Order";
import UserModel from "../../models/UserModel";
import Swal from 'sweetalert2';
import KitModel from "../../models/KitModel";
import OrderDTO from "../../models/dtos/OrderDTO";

function ListOng() {

  const [token, setToken] = useLocalStorage('token');
  const [id, setId] = useLocalStorage('id');
  const [type, setType] = useLocalStorage('type');
  const [orders, setOrders] = useState<Order[]>([]);
  let navigate = useNavigate();

  async function getOrders() {
    await searchorder("/api/Orders", setOrders,{
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getOrders()

  }, [orders.length])

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  useEffect(() => {
    if (type == "USER") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Acesso apenas para ONGS',
      })
      navigate("/homelog")
    }
  }, [type])

  return (
    <> <Grid item xs={12} style={{
      background: `url(https://i.imgur.com/9ayuO27.jpg)`,
      backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', backgroundSize: 'cover'
  }}>
      <AppBar position="sticky" style={{ background: 'transparent', boxShadow: 'none' }}>
          <div className="navbarmenu">
              <MenuSidebar />
          </div>
      </AppBar>
      {
        orders.map(unit => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Compra
                </Typography>
                <Typography variant="body2" component="p">
                  Id:{unit.id}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))
      }
      </Grid>
    </>
  );
}
export default ListOng;
