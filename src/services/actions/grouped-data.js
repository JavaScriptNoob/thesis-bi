import {PROCESS_FOR_GROUP, SHOW_THE_GROUP} from "../reducers/index-reducer";

export const setGroupedData=(groupedData)=> {

    return function (dispatch){
        dispatch({
            type:PROCESS_FOR_GROUP,
            payload:groupedData,


        })
    }
}
export const showGroup=(item)=> {

    return function (dispatch){
        dispatch({
            type:SHOW_THE_GROUP,
            payload:item,


        })
    }
}
