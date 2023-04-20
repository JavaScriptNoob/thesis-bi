import {PROCESS_FOR_PIE} from "../reducers/index-reducer";

export const setPieData=(pieData)=> {

    return function (dispatch){
        dispatch({
            type:PROCESS_FOR_PIE,
            payload:pieData,
        })
    }
}
