import {SET_INITIAL_DATA, FILTER_DATA, PROCESS_FOR_GROUP} from "../reducers/index-reducer";

export const setInitialData =(data)=>{
    return function (dispatch){
        dispatch({
            type:SET_INITIAL_DATA,
            payload:data,
        })
    }
}
