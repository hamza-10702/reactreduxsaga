import { ADD_TO_CART , REMOVE_TO_CART } from "../constant";

export const cartData = (data = [], action) => {
    console.log("This is reducer start");
    console.log(action)

    switch(action.type){
        case ADD_TO_CART:
            console.log("ADD to Cart Item",1+1);
            return [action.dataPayload , ...data];
        case REMOVE_TO_CART:
            console.log("Remove to cart item",1-1)
            return null;
        default:
            console.log(data);
            return data
    }
    
    
};
// export const noCartData = (data = [], action) => {
//     console.log("This is reducer start");
//     console.log(action)

//     switch(action.type){
//         case ADD_TO_CART:
//             console.log("ADD to Cart Item",1+1);
//             return action.dataPayload;
//         case REMOVE_TO_CART:
//             console.log("Remove to cart item",1-1)
//             return null;
//         default:
//             console.log(data);
//             return "no action found"
//     }
    
    
