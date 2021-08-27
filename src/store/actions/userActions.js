import {SIGN_IN} from "../constants/userConsts";

export const setLoginAction = (boolean) => {
    return {
        type: SIGN_IN,
        isLoggedIn: boolean
    }
}
