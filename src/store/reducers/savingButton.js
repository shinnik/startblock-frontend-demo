import * as actions from '../actions/actionTypes';

const initialState = {
    loading: false,
    success: false,
    error: false
};

const savingButtonReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SAVING_SUCCESS:
            return { ...state, success: true };
        case actions.SAVING_FAILED:
            return { ...state, failed: true };
        case actions.SAVING:
            return { ...state, loading: true };
        case actions.INIT_SAVING_BUTTON:
            return initialState;
        default:
            return state;
    }
};

export default savingButtonReducer;
