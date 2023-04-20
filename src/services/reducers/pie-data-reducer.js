import {PROCESS_FOR_PIE} from "./index-reducer";
const initialState = {
    processSuccess: false,
    processFailed: false,
    pieData: [],
    updatedData: [],
    stringifyData: [],
}

export const pieDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROCESS_FOR_PIE:
            return {
                ...state,
                pieData: action.payload
            }
        default:
            return state
    }
}
