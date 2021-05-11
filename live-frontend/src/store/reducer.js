import { combineReducers } from "redux";
import dashboardReducer from './reducer/dashboardReducer';



export default combineReducers
    ({
        dashboard: dashboardReducer
    });