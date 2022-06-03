interface UserLogin {
    Id: number;
    User: string;
    Password: string;
    token?: string| null
}

export default UserLogin;