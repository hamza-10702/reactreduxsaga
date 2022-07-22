import { GET_PRODUCTS } from "../constant";

export const getProduct = (data = [] , action)=>{
    console.log("This is product reducer");
    switch(action.type){
        case GET_PRODUCTS:
            console.log("Get product" ,action);
            return [action.data];
        default:
            return data
    }

}