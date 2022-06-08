import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Kit from '../../../models/Kit';
import { busca } from '../../../services/Services'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListKit.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material';
import { useSelector } from "react-redux";
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListKit() {

    const [kits, setKits] = useState<Kit[]>([]);
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    async function getKit() {
        await busca("/api/Order", setKits, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getKit()
    }, [kits.length])

    return (
        <>
            {
                kits.map(kit => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Kits
                                </Typography>
                                <Typography variant="h5" component="h2">
                                   {kit.id}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {kit.Name}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {kit.ProductClass}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {kit.Price}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {kit.ExpirationDate}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Link to={`/formularioKit/${kit.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                adicionar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarKit/${kit.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}

export default ListKit;