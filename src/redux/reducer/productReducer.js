import { GET_PRODUCTS, SET_GETED_PRODUCT } from "../constant";

export const getAllProduct = (data = [] , action)=>{
    console.log("This is product reducer");
    switch(action.type){
        case SET_GETED_PRODUCT:
             console.log("Extra Dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
             return [...action.data]
        default:
            return data
    }

}