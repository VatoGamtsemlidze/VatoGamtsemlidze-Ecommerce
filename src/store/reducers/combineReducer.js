import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import productReducer from "./productReducer";

const combineReducer = combineReducers({
    userReducer,
    productReducer
})
export default combineReducer;