import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, FormControl, FormHelperText, MenuItem } from "@material-ui/core"
import './CadastroPostagem.css';
import { useNavigate, useParams } from 'react-router-dom';
import Kit from '../../../models/Kit';
import useLocalStorage from 'react-use-localstorage';
import Order from '../../../models/Order';
import { busca, buscaId, post, put } from '../../../services/Services';
import { useSelector, state } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { KitesurfingRounded } from '@mui/icons-material';


function CadastroPostagem() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [kits, setKits] = useState<Kit[]>([]);
   
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])


    const [kit, setKit] = useState<Kit>({
        id: 0,
        Name: '',
        ProductClass: '',
        Price: number,
        ExpirationDate: '',
    })

    const [order, setOrder] = useState<Order>({
        id: 0,
        title: '',
        text: '',
        ProductClass:'',
    })
    

    useEffect(() => { 
        setOrder({
            ...order,
            Kit: kit
        })
    }, [Kit])

    useEffect(() => {
        getKits()
        if (id !== undefined) {
            findByIdOrder(id)
        }
    }, [id])

    async function getKits() {
        await search("/api/Kit", setKits, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdOrder(id: string) {
        await searchID(`/api/Orders/id/${id}`, setOrder, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedOrder(e: ChangeEvent<HTMLInputElement>) {

        setOrder({
            ...order,
            [e.target.name]: e.target.value,
            kit: kit
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        for (id == undefined) {
            post(`/api/Orders`, order, setOrder, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Doação cadastrada com sucesso.');
        }
        // back()

    }

    // function back() {
    //     navigate('/posts')
    // }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                <TextField value={order.title} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={order.text} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="descricao" label="descricao" name="descricao" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Kit </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/api/Temas/id/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            kit.map(kit => (
                                <MenuItem value={kit.id}>{kit.Price}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um kit para doar: </FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPostagem;