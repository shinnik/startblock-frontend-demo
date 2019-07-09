import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../utils/updateObject";

const initialState = {
    data: [{}, {}, {}, {}],
    multidata: [],
    multidata2: [],
    profile: {}
};

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MODAL_WINDOW_UNLOCKED: {
            const tmp = state.multidata;
            tmp[action.payload.id].blocked_money = 0;
            tmp[action.payload.id].state = 'unlocked';
            return tmp;
        }
        case actionTypes.MAIN_PAGE_FETCH_DATA: {
            return action.payload;
        }
        default:
            return state;
    }
};


export default mainPageReducer;
