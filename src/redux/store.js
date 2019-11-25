import reducer from "./reducer";
import {createStore, compose} from "redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";


export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
    )
);
export default store;