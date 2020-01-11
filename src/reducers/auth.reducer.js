import { LOADING, SUCCESS, FAILURE } from "../utilities/actionTranslate.utils";
import { LOGIN, LOGOUT } from "../actions/action.types";

const initialState = {
    isLoggedin: false,
    loading: false,
    error: null
};

export default (state = initialState, action) => {

    switch (action.type) {

        case LOADING(LOGIN):
            return {
                ...state,
                loading: true
            };

        case SUCCESS(LOGIN):
            return {
                ...state,
                isLoggedin: true,
                loading: false,
                authToken: action.payload
            };

        case FAILURE(LOGIN):
            return {
                ...state,
                loading: false,
                error: action.error
            };

        case LOGOUT:
            return {
                ...state,
                isLoggedin: false
            };

        default:
            return state;
    }

};
