import * as actions from '../actions/actionTypes';
import { p2pradios } from "../../lib/models/radiobuttons";

const initialState = {
    radios: [
        {value: 'nothing', label: 'Ничего нет', header: ''},
        {value: 'generator', label: 'Бензогенератор', header: 'Параметры бензогенератора'},
        {value: 'sun', label: 'Солнечная панель', header: 'Параметры солнечной панели'},
        {value: 'acc', label: 'Аккумуляторная батарея', header: 'Параметры аккумуляторной батареи'}
    ],
    p2pradios: p2pradios,
    selectedRadio: {value: 'nothing', label: 'Ничего нет', header: ''},
    selectedP2pRadio: p2pradios[0]
};

export const radioGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SELECT_RADIO:
            const {...s}= action.selectedRadio;
            return {  ...state, selectedRadio: s };
        case actions.SELECT_P2P_RADIO:
            console.log(action);
            return {  ...state, selectedP2pRadio: action.selectedP2pRadio };
        default:
            return state;
    }
};

