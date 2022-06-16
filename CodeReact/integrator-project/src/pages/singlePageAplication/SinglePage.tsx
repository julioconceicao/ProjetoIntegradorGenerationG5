import React from "react";
import { Link } from 'react-router-dom';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./SinglePage.css";
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";
import Footer from '../../Components/statics/footer/Footer';
import Home from '../../pages/home/Home';

function SinglePage() {
    return (
        <>
            <Home />
            <Footer />
        </>
    );
}
export default SinglePage;