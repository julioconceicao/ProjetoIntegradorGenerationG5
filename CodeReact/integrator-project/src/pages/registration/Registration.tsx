import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Typography, Button, TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import { Box } from "@mui/material";
import "./Registration.css";
import RegisterUser from "../../models/RegisterUser";
import { registerUser } from "../../services/Services"
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";

function Registration() {


    let navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState<String>("")

    const [userRegisterDTO, setUserRegisterDTO] = useState<RegisterUser>(
        {
            name: "",
            cpf_cnpj: "",
            email: "",
            password: "",
            adress: "",
            NameAgent: "",
            type: ""
        }
    );

    const [userResult, setUserResult] = useState<RegisterUser>(
        {
            name: "",
            cpf_cnpj: "",
            email: "",
            password: "",
            adress: "",
            NameAgent: "",
            type: ""
        }
    );


    function confirmPasswordHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmPassword(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserRegisterDTO({
            ...userRegisterDTO,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {

        e.preventDefault();

        if (confirmPassword === userRegisterDTO.password) {
            try {
                await registerUser(`/api/Users`, userRegisterDTO, setUserResult)
                alert('Usuario cadastrado com sucesso')
            } catch (error) {
                alert(error)
                alert('erro no formulário, tente novamente!')
            }

        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (


        <Grid container direction='row' justifyContent='center' alignItems='center'>

            <Grid item xs={6} className='image2'>

                <div className="navbarmenuregistration">
                    <MenuSidebar />
                </div>
            </Grid>
            <Grid item xs={6} alignItems='center'>

                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='text2'>Cadastrar</Typography>

                        <TextField
                            value={userRegisterDTO.name}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='name' label='Nome' variant='outlined' name='name' margin='normal' fullWidth />

                        <TextField
                            value={userRegisterDTO.cpf_cnpj}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='cpf_cnpj' label='CPF ou CNPJ' variant='outlined' name='cpf_cnpj' margin='normal' type='cpf_cnpj' fullWidth />

                        <TextField
                            value={userRegisterDTO.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='email' label='Email' variant='outlined' name='email' margin='normal' type='email' fullWidth />

                        <TextField
                            value={userRegisterDTO.password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' fullWidth />

                        <TextField
                            value={confirmPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmPasswordHandle(e)}
                            id='confirmPassword' label='ConfirmarSenha' variant='outlined' name='confirmPassword' margin='normal' type='password' fullWidth />

                        <TextField
                            value={userRegisterDTO.adress}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='adress' label='Endereço' variant='outlined' name='adress' margin='normal' fullWidth />

                        <TextField
                            value={userRegisterDTO.NameAgent}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='NameAgent' label='NomeAgente' variant='outlined' name='NameAgent' margin='normal' fullWidth />

                        <FormControl
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            variant="outlined">
                            <InputLabel htmlFor="outlined-age-native-simple">Tipo</InputLabel>
                            <Select
                                value={userRegisterDTO.type}
                                native
                                label="Tipo"
                                inputProps={{
                                    name: 'type',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value="USER">Usuário</option>
                                <option value="ONG">Ong</option>
                            </Select>
                        </FormControl>

                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Box marginY={2} textAlign='center'>
                                <Link to='/login'>
                                    <Button variant='outlined' className='btnCancel'>
                                    Cancelar
                                    </Button>
                                </Link>
                            </Box>
                            <Box marginY={2} textAlign='center'>
                                <Button  type='submit' variant='contained' color='primary' className='btnCadastrar'>
                                    Cadastrar
                                </Button>
                            </Box>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Registration;