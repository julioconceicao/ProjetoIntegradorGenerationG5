import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Order from '../../../models/Order';
import { busca } from '../../../services/Services'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListOrder.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material';
import { useSelector } from "react-redux";
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListOrder() {

    const [orders, setOrders] = useState<Order[]>([]);
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

    async function getOrder() {
        await busca("/api/Order", setOrders, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getOrder()
    }, [orders.length])

    return (
        <>
            {
                orders.map(order => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Pedidos
                                </Typography>
                                <Typography variant="h5" component="h2">
                                   {order.id}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {order.text}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {order.title}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioOrder/${order.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                adicionar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${order.id}`} className="text-decorator-none">
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

export default ListOrder;