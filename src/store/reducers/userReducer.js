import {SIGN_IN, SET_USER, SET_TOKEN} from "../constants/userConsts";

export const initialStore = {
    user: {},
    isLoggedIn: false,
    token: '',
}

export default function userReducer(store = initialStore, action){
    switch(action.type){
        case SET_USER:
            return {
                ...store,
                user: action.user,
            }
        case SIGN_IN:
            return {
                ...store,
                isLoggedIn: action.isLoggedIn
            }
        case SET_TOKEN:
            return {
                ...store,
                token: action.token
            }
        default:
            return store
    }
}