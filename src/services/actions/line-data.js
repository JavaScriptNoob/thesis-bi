import { PROCESS_FOR_LINE} from "../reducers/index-reducer";

export const setLineData=(lineData)=> {

    return function (dispatch){
        dispatch({
            type:PROCESS_FOR_LINE,
            payload:lineData,
        })
    }
}
