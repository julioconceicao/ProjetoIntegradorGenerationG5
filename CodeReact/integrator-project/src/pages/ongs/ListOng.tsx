import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { Typography, Box, Grid, TextField } from '@mui/material';
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";
import MenuItem from '@material-ui/core/MenuItem';
import "./Ong.css";
import useLocalStorage from "react-use-localstorage";
import { search } from "../../services/Services";
import Order from "../../models/Order";
import UserModel from "../../models/UserModel";
import Swal from 'sweetalert2';


function ListOng() {

  const [token, setToken] = useLocalStorage('token');
  const [id, setId] = useLocalStorage('id');
  const [type, setType] = useLocalStorage('type');
  const [orders, setOrders] = useState<UserModel[]>([]);
  let navigate = useNavigate();

  async function getOrders() {
    await search("/api/Users", setOrders, {
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
    <>
      {
        orders.map(unit => (
          <h1>{unit.name}</h1>
        ))
      }
    </>
  );
}
export default ListOng;
