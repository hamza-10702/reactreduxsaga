import { GET_PRODUCTS, SET_GETED_PRODUCT } from "../constant";

export const getProduct = (data = [] , action)=>{
    console.log("This is product reducer");
    switch(action.type){
        case GET_PRODUCTS:
            return [action.data];
        case SET_GETED_PRODUCT:
             console.log("Extra Dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
             return [...action.data]
        default:
            return data
    }

}