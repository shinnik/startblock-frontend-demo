import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: [{}, {}, {}, {}],
    multidata: [],
    multidata2: [],
    profile: {},
    flag: 'current'
};

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MODAL_WINDOW_UNLOCKED: {
            const tmp = state;
            tmp.profile.blocked -= tmp.multidata[action.payload.id].blocked;
            tmp.multidata[action.payload.id].blocked = 0;
            tmp.multidata[action.payload.id].state = 'unlocked';
            return tmp;
        }
        case actionTypes.MAIN_PAGE_FETCH_DATA: {
            return action.payload
        }
        default:
            return state;
    }
};


export default mainPageReducer;
