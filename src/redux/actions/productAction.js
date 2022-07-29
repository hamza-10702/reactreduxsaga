import { GET_PRODUCTS } from "../constant";

export const getProduct =()=>{
    return{
        type : GET_PRODUCTS,
        data : "apple"
    }
}