import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Typography, Box, Grid, Button, AppBar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./Home.css";
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";
import useLocalStorage from "react-use-localstorage";


function Home() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token !== '') {
            navigate('/homelog');
        }
    }, [token, navigate]);

    return (
        <>
            <Grid item xs={12} style={{
                background: `url(https://i.imgur.com/9ayuO27.jpg)`,
                backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', backgroundSize: 'cover'
            }}>
                <AppBar position="sticky" style={{ background: 'transparent', boxShadow: 'none' }}>
                    <div className="navbarmenu">
                        <MenuSidebar />
                        <div className="navbarbutton">
                            <Link to='/login'>
                                <button className="distancia">Login</button>
                            </Link>
                        </div>
                        <Link to='/Cadastro'>
                            <button>Cadastre-se</button>
                        </Link>
                    </div>
                </AppBar>
                <div>
                    <img src="https://imgur.com/fqAed38.png" alt="" width="250" className="logo" />
                </div>
            </Grid>
        </>
    );
}
export default Home;