import {PROCESS_FOR_GROUP} from "../reducers/index-reducer";

export const setGroupedData=(groupedData)=> {

    return function (dispatch){
        dispatch({
            type:PROCESS_FOR_GROUP,
            payload:groupedData,

        })
    }
}
