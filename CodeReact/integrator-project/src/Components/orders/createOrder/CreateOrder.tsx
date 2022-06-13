import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, FormControl, FormHelperText, MenuItem } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './CreateOrder.css';
import Kit from '../../../models/Kit';
import Ong from '../../../models/Ong';
import { search, searchId, post, put, } from '../../../services/Services';
import Order from '../../../models/Order';
import OrderDTO from '../../../models/dtos/OrderDTO';

function CreateOrder() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [kits, setKits] = useState<Kit[]>([]);
    const [ongs, setOngs] = useState<Ong[]>([]);                            

    const [ong, setOng] = useState<Ong>({
        id: 0,
        email:'',
        password:'',
        NameAgent:'',
        type:'',
    });

    const [kit, setKit] = useState<Kit>({
        id: 0,
        name: '',
        productClass: '',
        price: 0,
        expirationDate: ''
    });

    const [orderDTO, setOrderDTO] = useState<OrderDTO>({
        emailCreator: ong.email,
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
        getOngs()
        if (token === "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token]);

    useEffect(() => {
        setOrderDTO({
            ...orderDTO,
            emailCreator: ong.email,
            idKit: kit.id
        })
    }, [orderDTO])

    async function getKits() {
        await search("/api/Kit", setKits, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function getOngs(){
        await search("/api/Users", setOngs, {
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
        alert('Doação cadastrada com sucesso');

        back()
    }
    
    function back() {
        navigate('/homelog')
    }

    return (
        <div className='donation' style={{
            background: `url(https://i.imgur.com/uWxFuxx.jpg)`,
            backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', backgroundSize: 'cover'}} >
        <Container maxWidth="sm" className='doacao'>
             <Typography variant="h3" color="textSecondary" component="h1" align="center" className='doar'>Doar</Typography>
            <form onSubmit={onSubmit}>
                <FormControl>
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
                   
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => search(`/api/Users/id/${e.target.value}`, setOng, {
                            headers: {
                                'Authorization': token
                            }
                        })}>    
                            {   
                                ongs.map(unit => (
                                    <MenuItem value={unit.id}>{unit.name}</MenuItem>
                                ))
                            }
                    </Select>
                    <FormHelperText>Escolha a ONG</FormHelperText>                                        
                    <Button type="submit" variant="contained" color="primary" className='btnCadastrar2'>
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
        </div>
    )
}
export default CreateOrder;