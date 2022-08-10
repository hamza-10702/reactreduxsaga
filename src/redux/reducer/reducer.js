import { ADD_TO_CART , REMOVE_TO_CART,EPMTY_CART } from "../constant";

export const cartData = (data = [], action) => {
    console.log("This is reducer start");
    console.log(action)

    switch(action.type){
        case ADD_TO_CART:
            console.log("ADD to Cart Item",1+1);
            return [action.dataPayload , ...data];
        case REMOVE_TO_CART:
            console.log("Remove to cart item",action)
            console.log(data)
            const remainingData = data.filter((item) => item.id !== action.dataPayload )
            console.log(remainingData)
            return [...remainingData];
        case EPMTY_CART:
            console.log("Empty cart",1-1)
            data.length = 0
            return [...data];
        default:
            console.log(data);
            return data
    }
    
    
};

    
    
