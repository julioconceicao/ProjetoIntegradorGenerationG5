import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Grid, Typography, Button, TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import { Box } from "@mui/material";
import "./Registration.css";
import RegisterUser from "../../models/RegisterUser";
import { registerUser } from "../../services/Services"
import MenuSidebar from "../../Components/statics/menuSidebar/MenuSidebar";
import Swal from 'sweetalert2';

function Registration() {

    let navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState<String>("")

    const [userRegisterDTO, setUserRegisterDTO] = useState<RegisterUser>(
        {
            name: "",
            cpf_cnpj: "",
            email: "",
            password: "",
            showPassword: false,
            adress: "",
            NameAgent: "",
            type: "",
        }
    );

    const [userResult, setUserResult] = useState<RegisterUser>(
        {
            name: "",
            cpf_cnpj: "",
            email: "",
            password: "",
            showPassword: false,
            adress: "",
            NameAgent: "",
            type: "",
        }
    );

    const handleChange = (prop: keyof RegisterUser) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserRegisterDTO({ ...userRegisterDTO, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setUserRegisterDTO({ ...userRegisterDTO, showPassword: !userRegisterDTO.showPassword });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

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
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Usuário cadastrado com sucesso',
                    showConfirmButton: false,
                    timer: 1500
                  })
                {
                    navigate('/login')
                }
            } catch (error) {
                alert(error)
                alert('erro no formulário, tente novamente!')
            }

        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className="backgroundrosa">

            <Grid item xs={6} className='image2'>
                <div className="alignsidebarohyes2">
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
                            id='name' label='Nome' variant='outlined' name='name' margin='normal' fullWidth className="colorbut2" />

                        <TextField
                            value={userRegisterDTO.cpf_cnpj}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='cpf_cnpj' label='CPF ou CNPJ' variant='outlined' name='cpf_cnpj' margin='normal' type='cpf_cnpj' fullWidth className="colorbut2" />

                        <TextField
                            value={userRegisterDTO.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='email' label='Email' variant='outlined' name='email' margin='normal' type='email' fullWidth className="colorbut2" />

                        <FormControl variant="outlined" fullWidth className="none">
                            <InputLabel htmlFor="outlined-adornment-password" className="none" >password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={userRegisterDTO.showPassword ? 'text' : 'password'}
                                value={userRegisterDTO.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {userRegisterDTO.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                } className="colorbut2"
                                labelWidth={80}
                            />
                        </FormControl>

                        <TextField
                            value={confirmPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmPasswordHandle(e)}
                            id='confirmPassword' label='ConfirmarSenha' variant='outlined' name='confirmPassword' margin='normal' type='password' fullWidth className="colorbut2" />

                        <TextField
                            value={userRegisterDTO.adress}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='adress' label='Endereço' variant='outlined' name='adress' margin='normal' fullWidth className="colorbut2" />

                        <TextField
                            value={userRegisterDTO.NameAgent}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='NameAgent' label='NomeAgente' variant='outlined' name='NameAgent' margin='normal' fullWidth className="colorbut2" />

                        <FormControl
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            variant="outlined" className="colorbut2">
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
                                <Link to='/Login' className="none">
                                    <Button variant='contained' className="btnCancelarCadastrar">
                                        Cancelar
                                    </Button>
                                </Link>
                            </Box>
                            <Box marginY={2} textAlign='center'>
                                <Button type='submit' variant='contained' className="btnCancelarCadastrar">
                                    Cadastrar
                                </Button>
                            </Box>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid >
    );
}

export default Registration;