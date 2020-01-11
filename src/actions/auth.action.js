import { LOADING, SUCCESS, FAILURE } from "../utilities";
import { LOGIN } from "./action.types";
import { login } from "../services";

export const login = (payload) => (dispatch) => {
    dispatch({
        type: LOADING(LOGIN),
        payload: true
    });
    return login(payload)
        .then(res => {
            dispatch({
                type: SUCCESS(LOGIN),
                payload: res
            });
        })
        .catch(() => {
            dispatch({
                type: FAILURE(LOGIN),
                error: "Login Failed"
            });
        });
}