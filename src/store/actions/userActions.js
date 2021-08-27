import {SET_TOKEN, SET_USER, SIGN_IN} from "../constants/userConsts";

export const setUserAction = (user) => {
    return {
        type: SET_USER,
        user
    }
}
export const setTokenAction = (token) => {
    return {
        type: SET_TOKEN,
        token
    }
}
export const setLoginAction = (boolean) => {
    return {
        type: SIGN_IN,
        isLoggedIn: boolean
    }
}
