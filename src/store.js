import {combineReducers}from 'redux'
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzasReducers } from './reducers/pizzaReducers';

const finalReducer = combineReducers({
   getAllPizzasReducer: getAllPizzasReducers
})

const initialState={}
const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)) )

export default store;