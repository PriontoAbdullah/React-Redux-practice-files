import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

export default combineReducers({
    counterReducer, userReducer
});