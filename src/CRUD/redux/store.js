import { createStore , applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from 'redux-thunk'
import logger from "redux-logger";
import rootReducer from './root-reducer'

const middlewares = [reduxThunk]
if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

const store = createStore(rootReducer , applyMiddleware(...middlewares))

export default store

