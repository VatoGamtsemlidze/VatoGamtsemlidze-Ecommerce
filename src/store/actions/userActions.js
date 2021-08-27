import {SIGN_IN, SIGN_OUT} from "../constants/userConsts";

export const signInAction = () => {
    return {
        type: SIGN_IN,
        isLoggedIn: true
    }
}
export const signOutAction = () => {
    return {
        type: SIGN_OUT,
        isLoggedOut: false
    }
}