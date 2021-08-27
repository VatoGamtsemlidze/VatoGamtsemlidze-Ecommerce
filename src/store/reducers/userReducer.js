import {SIGN_IN, SIGN_OUT} from "../constants/userConsts";

export const initialStore = {
    isLoggedIn: false
}

export default function userReducer(store = initialStore, action){
    switch(action.type){
        case SIGN_IN:
            return {
                ...store,
                isLoggedIn: action.isLoggedIn
            }
        case SIGN_OUT:
            return {
                ...store,
                isLoggedIn: action.isLoggedOut
            }
        default:
            return store
    }
}