import {PROCESS_FOR_CHANGE,SET_INITIAL_DATA} from "./index-reducer";

const initialState = {
    processSuccess: false,
    processFailed: false,
    initialData: [],
    updatedData: [],
    stringifyData: [],

}


export const updatedDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIAL_DATA:
            return {
                ...state,
                initialData: action.payload
            }
            case PROCESS_FOR_CHANGE:
            return {
                ...state,
                processSuccess: true
            }
        default:
            return state
    }
}
