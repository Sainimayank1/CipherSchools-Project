import {createStore, applyMiddleware } from 'redux'
import {combineReducers} from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from "./reducers/userReducer.js"

const rootreducer  = combineReducers(
    {
        userReducer
    }
);


const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;