import * as actionTypes from '../actions/actionTypes';


const initialState = {
    isIntervalExist: false,
    interval: 7000
};



function fetcherReducer(state=initialState, action) {
    switch (action.type) {
        case actionTypes.SET_INTERVAL: {
            return {
                ...state,
                isIntervalExist: true
            }
        }
        default:
            return state;
    }
}


export default fetcherReducer;
