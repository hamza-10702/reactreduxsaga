import { GET_PRODUCTS } from "../constant";

export const fetchAllProduct =()=>{
    return{
        type : GET_PRODUCTS,
    }
}