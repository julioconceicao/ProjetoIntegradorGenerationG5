import Kit from './Kit'

interface Order{
    id: number;
    title: string;
    text: string;
    ProductClass?: string | null
}

export default Order;