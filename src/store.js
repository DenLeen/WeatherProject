import {createStore, applyMiddleware} from "redux";
import combineReducers from "./reducers/rootReducers";
import thunk from "redux-thunk";

export const store = createStore(combineReducers, applyMiddleware(thunk));