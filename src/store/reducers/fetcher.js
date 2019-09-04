import * as actionTypes from '../actions/actionTypes';
import {BACKEND_SERVER_USERDATA} from "../../lib/constants/endpoints";


const initialState = {
    isIntervalExist: false,
    interval: 7000,
    userDataEndPoint: BACKEND_SERVER_USERDATA,
    intervalID: 0
};



function fetcherReducer(state=initialState, action) {
    switch (action.type) {
        case actionTypes.SET_INTERVAL: {
            return {
                ...state,
                isIntervalExist: action.payload.value,
                intervalID: action.payload.id
            }
        }
        case actionTypes.SET_ENDPOINT: {
            return {
                ...state,
                userDataEndPoint: action.payload.value
            }
        }
        default:
            return state;
    }
}


export default fetcherReducer;
