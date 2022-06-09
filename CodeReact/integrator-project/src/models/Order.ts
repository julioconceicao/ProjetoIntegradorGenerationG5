import Kit from './Kit'
import RegisterUser from './RegisterUser'

interface Order{
    emailCreator?: RegisterUser| null;
    idKit?: Kit| null;
}

export default Order;