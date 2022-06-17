interface RegisterUser {
    name?: string| null;
    cpf_cnpj?: string| null;
    email?: string| null;
    password?: string| null;
    showPassword?: boolean;
    adress?: string| null;
    NameAgent?: string| null;
    type?: string| null;
}

export default RegisterUser;