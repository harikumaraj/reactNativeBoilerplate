import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import _form from "./form.reducer";
import auth from "./auth.reducer";

const form = formReducer.plugin(_form);

const reducers = {
    form,
    auth
};

const combineReducer = combineReducers(reducers);


// The below function is a wrapper for combine reducer. The whole reducer can be accessed
// inside of it. Can be used for actions that need updating of more than one reducer. 
// DISCLAIMER: Should not be used until unless necessary.

const rootReducer = (state, action) => {
    let tempState = state;
    // if (action.type === "LOGOUT") {
    //     tempState = {};
    // }
    return combineReducer(tempState, action);
};

export default rootReducer;
