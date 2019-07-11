import * as actions from '../actions/actionTypes';
import { initialState } from './settingsPageInitialState';

export const settingsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SELECT_RADIO:
            return state.setIn(['currentGeneratorNumber'], action.selectedGenerator);
        case actions.CHANGE_PARAMETER_VALUE:
            const curGen = state.get('currentGeneratorNumber');
            return state.setIn(['radios', curGen, 'inputTypes', action.payload.param, 'value'], action.payload.value);
        case actions.TYPE_INFO:
            return state.setIn(['mains', action.payload.param, 'value'], action.payload.value);
        case actions.SELECT_STRATEGY:
            return state.setIn(['p2p', 'current'], action.value);
        case actions.TOGGLE_TRADE:
            return state.setIn(['p2p', 'status'], action.value);
        case actions.TOGGLE_LOAD:
            return state.setIn(['managedLoad', 'status'], action.value);
        case actions.TOGGLE_BALANCE:
            return state.setIn(['balance', 'status'], action.value);
        case actions.CHANGE_IMPORTANCY:
            return state.setIn(['managedLoad', 'items'], action.items);
        case actions.CHANGE_ROSETTE_NAME:
            const idx = state.getIn(['managedLoad', 'items']).findIndex(i => i.get('id') === action.payload.id);
            return state.setIn(['managedLoad', 'items', idx, 'name'], action.payload.value);
        default:
            return state

    }
}

