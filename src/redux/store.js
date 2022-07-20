import {createStore} from "redux";


const dummyFunctionForStore = ()=>{
    return 100;
}

const store = createStore(dummyFunctionForStore);

export default store;
