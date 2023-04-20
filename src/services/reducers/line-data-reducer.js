import {PROCESS_FOR_LINE} from "./index-reducer";

const initialState = {
    processSuccess: false,
    processFailed: false,
    lineData: [],
    updatedData: [],
    stringifyData: [],
}
 export const lineDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROCESS_FOR_LINE:
            return {
                ...state,
                lineData: action.payload
            }
        default:
            return state
    }
}

