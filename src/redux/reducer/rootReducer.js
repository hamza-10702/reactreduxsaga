import { combineReducers } from "redux";
import {cartData } from './reducer'
import { getAllProduct } from "./productReducer";

export default combineReducers({
    cartData,
    getAllProduct
});
