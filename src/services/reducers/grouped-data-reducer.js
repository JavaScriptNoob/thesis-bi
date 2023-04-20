import {PROCESS_FOR_GROUP} from "./index-reducer";

const initialState = {
    groupingSuccess: false,
    processFailed: false,
    groupedData: [],
    updatedData: [],
    stringifyData: [],
}
export const groupedDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROCESS_FOR_GROUP:
            return {
                ...state,
                groupedData:action.payload,
                groupingSuccess: true
            }
        default:
            return state
    }
}
