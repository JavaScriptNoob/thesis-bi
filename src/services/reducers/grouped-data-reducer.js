import {PROCESS_FOR_GROUP,SHOW_THE_GROUP} from "./index-reducer";

const initialState = {
    groupingSuccess: false,
    processFailed: false,
    groupedData: [],
    updatedData: [],
    stringifyData: [],
    initialData:[]
}
export const groupedDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROCESS_FOR_GROUP:
            return {
                ...state,
                groupedData:action.payload,
                groupingSuccess: true,
                initialData: action.payload[0]
            }
        case SHOW_THE_GROUP:
            return {
                ...state,
                initialData: action.payload
            }
        default:
            return state
    }
}
