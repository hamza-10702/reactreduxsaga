import { combineReducers } from "redux";
import {cartData } from './reducer'
import { getProduct } from "./productReducer";

export default combineReducers({
    cartData,
    getProduct
});
