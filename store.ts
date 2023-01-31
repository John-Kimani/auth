import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import  thunk  from "redux-thunk";
import { authenticationRequestReducer } from "./src/reducers/authenticationReducers";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";

const reducer = combineReducers({
    authenticationRequest: authenticationRequestReducer,

})

const intialState = {

};


const store = legacy_createStore(reducer, intialState, applyMiddleware(thunk));

export default store;