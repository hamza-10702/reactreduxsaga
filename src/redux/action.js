import { ADD_TO_CART , REMOVE_TO_CART } from "./constant";


export const addToCart = (dataPayload) =>{
    console.log("This is action  which is takes data from react component and send to reducer by using type");
    console.warn(dataPayload);
    return{
        type: ADD_TO_CART,
        dataPayload,
    }
}


export const removeToCart = () =>{
    console.log("This is action  which is takes data from react component and send to reducer by using type");
    console.log("This is remove to cart data ")
    return{
        type: REMOVE_TO_CART,
       
    }
}