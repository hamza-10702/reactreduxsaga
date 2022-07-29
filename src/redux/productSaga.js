import {takeEvery , put} from 'redux-saga/effects';
import { GET_PRODUCTS,SET_GETED_PRODUCT } from './constant';


function* getProducts(){
     let data = yield fetch('http://localhost:3004/Product');
    data = yield data.json();
    // console.log("GET_PRODUCTS called", data);
    yield put({type: SET_GETED_PRODUCT , data})
}

function* productSaga(){
    yield takeEvery(GET_PRODUCTS , getProducts)
}

export default productSaga;