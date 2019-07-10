import * as actions from '../actions/actionTypes';
import { initialState } from './settingsPageInitialState';

export const settingsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SELECT_RADIO:
            return state.setIn(['currentGeneratorNumber'], action.selectedGenerator)
        case actions.CHANGE_PARAMETER_VALUE:
            return { ...state, generator: action} 
        default:
            return state;
    }
}

