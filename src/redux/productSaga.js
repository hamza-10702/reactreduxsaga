import { takeEvery, put } from "redux-saga/effects";
import {
  GET_PRODUCTS,
  SEARCH_ALL_PRODUCT,
  SET_GETED_PRODUCT,
} from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:3000/Product");
  data = yield data.json();
  // console.log("GET_PRODUCTS called", data);
  yield put({ type: SET_GETED_PRODUCT, data });
}
function* searchAllProducts(data) {
    console.log("Data Query" , data)
  let result = yield fetch(`http://localhost:3000/Product?q=${data.queryData}`);
  result = yield result.json();
  console.log("SEARCH_ALL_PRODUCT called", result);
  yield put({ type: SET_GETED_PRODUCT, data: result});
}

function* productSaga() {
  yield takeEvery(GET_PRODUCTS, getProducts);
  yield takeEvery(SEARCH_ALL_PRODUCT, searchAllProducts);
}

export default productSaga;
