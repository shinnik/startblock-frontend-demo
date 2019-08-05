import * as actions from '../actions/actionTypes';
import { initialState } from './settingsPageInitialState';
import sortByKey from '../../utils/sortByKey';
import { fromJS } from 'immutable';

const response = {
    mains:["Alpha","192.168.0.1"],
    currentGeneratorName:"benz",
    radios: [{
        label: "absent",
        inputTypes: [-1,-1]
    },
    {
        label: "benz",
        inputTypes: [123,123]
    },
    {
        label: "sun",
        inputTypes: [123,123]
    },
    {
        label: "acc",
        inputTypes: [321,321]
    }],
    managedLoad: {
        status: true,
        items: [
            {
                id: 1,
                name: "Kitchen", 
                priority: 1
            },
            {
                id: 2,
                name: "Bathroom",
                priority: 2
            },
            {
                id: 3, 
                name: "Room",
                priority: 3
            }]
        },
    p2p: {
        status: true, 
        current: "0"
    },
    balance: {
        status: false
    }
    };


export const settingsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SELECT_RADIO:
            return state.setIn(
                ['currentGeneratorName'],
                action.selectedGenerator
            );
        case actions.CHANGE_PARAMETER_VALUE:
            const curGen = state.get('currentGeneratorName');
            const changedRadioIdx = state
                .get('radios')
                .findIndex(radio => radio.get('value') === curGen)
            return state.setIn(
                ['radios', changedRadioIdx, 'inputTypes', action.payload.param, 'value'],
                action.payload.value
            );
        case actions.TYPE_INFO:
            return state.setIn(
                ['mains', action.payload.param, 'value'],
                action.payload.value
            );
        case actions.SELECT_STRATEGY:
            return state.setIn(
                ['p2p', 'current'],
                action.value
            );
        case actions.TOGGLE_TRADE:
            return state.setIn(
                ['p2p', 'status'],
                action.value
            );
        case actions.TOGGLE_LOAD:
            return state.setIn(
                ['managedLoad', 'status'],
                action.value
            );
        case actions.TOGGLE_BALANCE:
            return state.setIn(
                ['balance', 'status'],
                action.value
            );
        case actions.CHANGE_IMPORTANCY:
            return state.setIn(
                ['managedLoad', 'items'],
                action.items
            );
        case actions.CHANGE_ROSETTE_NAME:
            const idx = state
                .getIn(['managedLoad', 'items'])
                .findIndex(i => i.get('id') === action.payload.id);
            return state.setIn(
                ['managedLoad', 'items', idx, 'name'],
                action.payload.value
            );
        case actions.SETTINGS_PAGE_FETCH_DATA: {
            const { 
                mains, 
                currentGeneratorName, 
                radios, 
                managedLoad, 
                p2p, 
                balance 
            } = response;
            return state
                .setIn(['mains', 0, 'value'], mains[0])
                .setIn(['mains', 1, 'value'], mains[1])
                .setIn(['currentGeneratorName'], currentGeneratorName)
                .setIn(['radios', 1, 'inputTypes', 0, 'value'], radios[1]['inputTypes'][0])
                .setIn(['radios', 1, 'inputTypes', 1, 'value'], radios[1]['inputTypes'][1])
                .setIn(['radios', 2, 'inputTypes', 0, 'value'], radios[2]['inputTypes'][0])
                .setIn(['radios', 2, 'inputTypes', 1, 'value'], radios[2]['inputTypes'][1])
                .setIn(['radios', 3, 'inputTypes', 0, 'value'], radios[3]['inputTypes'][0])
                .setIn(['radios', 3, 'inputTypes', 1, 'value'], radios[3]['inputTypes'][1])
                .setIn(['managedLoad', 'status'], managedLoad.status)
                .setIn(['managedLoad', 'items'], fromJS(sortByKey(managedLoad.items, 'priority')))
                .setIn(['p2p', 'status'], p2p.status)
                .setIn(['p2p', 'current'], p2p.current)
                .setIn(['balance', 'status'], balance.status)
        }
        default:
            return state

    }
}

