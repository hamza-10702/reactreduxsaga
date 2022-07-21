import { ADD_TO_CART , REMOVE_TO_CART } from "../constant";

export const cartData = (data = {}, action) => {
    console.log("This is reducer start");
    console.log(action)

    switch(action.type){
        case ADD_TO_CART:
            console.log("ADD to Cart Item",1+1);
            return 1+1;
        case REMOVE_TO_CART:
            console.log("Remove to cart item",1-1)
            return 1-1
        default:
            return "no action found"
    }
    
    // if(action.type === ADD_TO_CART){
    //     return data
    // }
    // else{
    //     console.log("This is reducer end")
    //     return("No action called")
    // }
};
