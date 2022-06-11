import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, FormControl, FormHelperText, MenuItem } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './CreateOrder.css';
import Kit from '../../../models/Kit';
import { search, searchId, post, put, } from '../../../services/Services';
import Order from '../../../models/Order';
import OrderDTO from '../../../models/dtos/OrderDTO';


function CreateOrder() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [email, setEmail] = useLocalStorage('email');
    const [kits, setKits] = useState<Kit[]>([]);

    const [kit, setKit] = useState<Kit>({
        id:0,
        name: '',
        productClass: '',
        price: 0,
        expirationDate: ''
    });

    const [orderDTO, setOrderDTO] = useState<OrderDTO>({
        emailCreator: email,
        idKit: kit.id
    })
    
    useEffect(() => {
        getKits()
        if (token === "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token]);

    useEffect(() => {
        setOrderDTO({
            ...orderDTO,
            idKit: kit.id
        })
    }, [orderDTO])

    async function getKits(){
        await search("/api/Kit", setKits, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        await post("/api/Orders", orderDTO, setOrderDTO, {
            headers: {
                'Authorization': token
            }
        })
        alert('Compra cadastrada com sucesso');

        back()
    }

    function back() {
        navigate('/homelog')
    }

    return(
        <Container maxWidth="sm">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Compra</Typography>
                <TextField value={email} id="emailCreator" label="Email" variant="outlined" name="emailCreator" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Kit </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => searchId(`/api/Kit/id/${e.target.value}`, setKit, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                            {   
                                kits.map(unit => (
                                    <MenuItem value={unit.id}>{unit.name}</MenuItem>
                                ))
                            }
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