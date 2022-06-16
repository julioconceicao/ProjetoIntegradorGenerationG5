import KitModel from './KitModel';
import UserModel from './UserModel';

interface Order{
    id: number;
    emailCreator: UserModel; 
    idKit: KitModel;
}

export default Order;