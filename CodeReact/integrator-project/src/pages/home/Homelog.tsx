import React from "react";
import { Link,useNavigate } from 'react-router-dom';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import "./Home.css";
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";
import useLocalStorage from "react-use-localstorage";

function Homelog() {
    const [token, setToken] = useLocalStorage('token');
    const [id, setId] = useLocalStorage('id');

    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        setId('')
        alert("Usuário deslogado")
        navigate('/login')
    }  
    return (
        <>
            <Grid item xs={12} style={{
                background: `url(https://imgur.com/cps58Bf.jpg)`,
                backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', backgroundSize: 'cover'
            }}>
                <div className="navbarmenu">

                    <MenuSidebar />

                    <div className="navbarbutton">
                            <Link to={'/Order'}>
                            <button>Carrinho</button>
                            </Link>
                            <button onClick={goLogout}> Logout</button>
                    </div>
                </div>
                <div>
                    <img className="logo" src="https://imgur.com/fqAed38.png" alt="" width="250" />
                </div>
            </Grid>
        </>
    );
}
export default Homelog;