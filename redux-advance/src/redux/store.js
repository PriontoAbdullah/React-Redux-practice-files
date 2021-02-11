import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {};

export const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(logger, thunk)) 
);
