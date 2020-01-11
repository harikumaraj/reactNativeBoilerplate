import {SET_PROPERTY_VALUE, RESET_PROPERTY_VALUE} from "../actions/action.types";

const formReducers = {
    profileInformation: (state, action) => {
        // The below code is an example of how to handle form state change externally.
        
        switch (action.type) {
        // case "SET_PROPERTY_VALUE":
        //     return {
        //         ...state,
        //         values: {
        //             ...state.values,
        //             [action.property]: action.value
        //         }
        //     };
        // case "RESET_PROPERTY_VALUE":
        //     return {
        //         ...state,
        //         values: {
        //             ...state.values,
        //             [action.property]: ""
        //         }
        //     };

        default:
            return state;
        }
    }
};

export default formReducers;
