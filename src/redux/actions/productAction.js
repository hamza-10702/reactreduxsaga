import { GET_PRODUCTS } from "../constant";

export const getProduct = async()=>{
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    data = data.json();
    return{
        type : GET_PRODUCTS,
        data
    }
}