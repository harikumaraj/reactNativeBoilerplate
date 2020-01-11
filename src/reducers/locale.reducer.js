import {SET_LANGUAGE, RESET_LANGUAGE} from "../actions/action.types";
import {languageUtil} from "../utilities";

const initialState = {
    language: languageUtil.getCurrentLocale()
};

export default (state = initialState, action) => {

    switch (action.type) {
    case SET_LANGUAGE:
        return {
            ...state,
            language: action.payload
        };
    case RESET_LANGUAGE:
        return {
            ...initialState
        };
    default:
        return state;
    }
};
