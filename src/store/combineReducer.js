import {combineReducers} from 'redux';
import userReducer from "./user/userReducer";
import productReducer from "./product/productReducer";

const combineReducer = combineReducers({
    userReducer,
    productReducer
})
export default combineReducer;