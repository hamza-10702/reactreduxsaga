import {createStore} from "redux";


const dummyFunction = ()=>{
    return 100;
}

const store = createStore(dummyFunction);

export default store;
