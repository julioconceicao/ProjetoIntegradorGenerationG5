import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Typography, TextField, Button, Select, InputLabel, FormControl, FormHelperText, MenuItem } from "@material-ui/core"
import {Box} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './CreateOrder.css';
import Kit from '../../../models/Kit';
import Order from '../../../models/Order';
import { search, searchId, post, put, } from '../../../services/Services';


function CreateOrder() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [products, setProducts] = useState<Kit[]>([]);
    const [emailCreator, setEmailCreator] = useLocalStorage('email');
    const [idKit, setIdKit] = useLocalStorage('name');
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])    

    const [product, setProduct] = useState<Kit>({
        name: '',
        productClass: '',
        price: 0,
        expirationDate: ''
    })

    const [purchase, setPurchase] = useState<Order>({
        emailCreator: {
            email: (emailCreator),
        },
        idKit: null
    })

    useEffect(() => { 
        setPurchase({
            ...purchase,
            idKit: product
        })
    }, [product])

    async function getProduct() {
        await search("/api/Kit", setProduct, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function getOrderById(id: string) {
        await searchId(`/api/Orders/id/${id}`, setPurchase, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getProduct()
        if (id !== undefined) {
            getOrderById(id)
        }
    }, [id])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/api/Kit`, purchase, setPurchase, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Compra atualizada com sucesso');
        } else {
            post(`/api/Kit`, purchase, setPurchase, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Compra cadastrada com sucesso');
        }
        back()
    }

    function back() {
        navigate('/listacompras')
    }

    return(
        <Container maxWidth="sm">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Compra</Typography>
                <TextField value={purchase.emailCreator} id="emailCreator" label="Email" variant="outlined" name="emailCreator" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Kit </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => searchId(`/api/kit/id/${e.target.value}`, setProducts, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                    </Select>
                    <FormHelperText>Escolha o Kit</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CreateOrder;