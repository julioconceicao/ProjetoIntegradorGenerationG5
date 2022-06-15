interface UserLogin {
    email?: string| null;
    password?: string| null;
    showPassword: boolean;
    type?: string| null;
}

export default UserLogin;