import * as dashboardAction from '../actions/dashboardAction';


const initialState = {
    username: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case dashboardAction.DASHBOARD_SET_USERNAME:
            return {
                ...state,
                username: action.username
            };
        default:
            return state
    }
}


export default reducer;