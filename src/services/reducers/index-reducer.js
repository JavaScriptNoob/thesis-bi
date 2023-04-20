import {groupedDataReducer} from "./grouped-data-reducer";
import {combineReducers} from "redux";
import {updatedDataReducer} from "./updated-data-reducer";
import {pieDataReducer} from "./pie-data-reducer";
import {lineDataReducer} from "./line-data-reducer";


export const SET_INITIAL_DATA ='SET_INITIAL_DATA';
export const IMPORT_RAW_DATA= 'IMPORT_RAW_DATA';
export const PROCESS_FOR_PIE= 'PROCCESS_FOR_PIE';
export const PROCESS_FOR_GROUP = 'PROCESS_FOR_GROUP';
export const PROCESS_FOR_CHANGE = 'PROCESS_FOR_CHANGE';
export const PROCESS_FOR_LINE = 'PROCESS_FOR_LINE';
export const FILTER_DATA = 'FILTER_DATA';


export const rootReducer = combineReducers({
    pie: pieDataReducer,
    updated:updatedDataReducer,
    grouped:groupedDataReducer,
    line:lineDataReducer,
});
