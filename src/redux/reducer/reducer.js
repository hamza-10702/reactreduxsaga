import { ADD_TO_CART } from "../constant";

export const cartData = (data = {}, action) => {
    console.log("This is reducer start");
    console.log(action)
    
    if(action.type === ADD_TO_CART){
        return data
    }
    else{
        console.log("This is reducer end")
        return("No action called")
    }
};
