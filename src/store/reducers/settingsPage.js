import * as actions from '../actions/actionTypes';
import { p2pradios } from "../../lib/models/radiobuttons";
import * as inputTypes from '../../lib/containers/InputPair/inputTypes';

const initialState = {
    name: '',
    ip: '',
    generator: {
        value: '',
        label: 'Ничего нет',
        header: ''
    },
    radios: [
        {
            value: '',
            label: 'Ничего нет',
            header: ''
        },
        {
            value: 'generator',
            label: 'Бензогенератор',
            header: 'Параметры бензогенератора',
            inputTypes: [inputTypes.powerInput, inputTypes.costInput]
        },
        {
            value: 'sun',
            label: 'Солнечная панель',
            header: 'Параметры солнечной панели',
            inputTypes: [inputTypes.powerInput, inputTypes.costInput]
        },
        {
            value: 'acc',
            label: 'Аккумуляторная батарея',
            header: 'Параметры аккумуляторной батареи',
            inputTypes: [inputTypes.powerInput, inputTypes.capacityInput]
        }
    ],
    managedLoad: {
        status: false,
        items: [{
                importancy: 0,
                name: 'Кухня'
            },
            {
                importancy: 1,
                name: 'Комната'
            },
            {
                importancy: 2,
                name: 'Туалет'
            }]
    },
    p2p: {
        status: false,
        strategies: p2pradios,
        current: 'max-profit'
    },
    balance: {
        status: false
    }
};

export const settingsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SELECT_RADIO:
            console.log(action);
            return {  ...state, generator: action.selectedGenerator };
        default:
            return state;
    }
}

