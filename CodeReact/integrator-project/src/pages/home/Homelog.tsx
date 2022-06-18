
import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { login } from "../../services/Services"
import { Typography, Box, Grid, Button, AppBar } from '@material-ui/core';
import "./Home.css";
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";
import Footer from '../../Components/statics/footer/Footer';
import Home from '../../pages/home/Home';
import Purpose from "../purpose/Purpose";
import Kit from "../kit/Kit";
import Donation from "../donation/Donation";
import useLocalStorage from "react-use-localstorage";
import Swal from 'sweetalert2';

function Homelog() {
    const [token, setToken] = useLocalStorage('token');
    const [id, setId] = useLocalStorage('id');

    let navigate = useNavigate();
    
    useEffect(() => {
        if (token == '') {
            navigate('/login');
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Oops...',
                text: 'Acesso negado, você precisa estar logado',
            })
        }
    }, [token, navigate]);

    function goLogout() {
        setToken('')
        setId('')
        alert("Usuário deslogado")
        navigate('/login')
    }

    return (
        <>
            <Grid item xs={12} style={{
                background: `url(https://i.imgur.com/t9fgIbC.jpg)`,
                backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', backgroundSize: 'cover'
            }}>
                <AppBar position="sticky" style={{ background: 'transparent', boxShadow: 'none' }}>
                <div className="navbarmenu">
                    <MenuSidebar />
                    <div className="navbarbutton">
                        <Link to={'/Order'}>
                            <button className="distancia">Doar</button>
                        </Link>
                    </div>
                    <button onClick={goLogout}>Logout</button>
                </div>
                </AppBar>
                <div>
                    <img className="logo" src="https://imgur.com/fqAed38.png" alt="" width="250" />
                </div>
            </Grid>
            <Purpose />
            <Kit />
        </>
    );
}
export default Homelog;