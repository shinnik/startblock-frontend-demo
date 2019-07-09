import * as actions from './actionTypes';

export const setRadioButtonAction = (selectedValue) => {
    return (dispatch, getState) => {
        const { settings: { radios } } = getState();
        const selectedRadio = radios.find(radio => radio.value === selectedValue);
        dispatch ({
            type: actions.SELECT_RADIO,
            selectedRadio
        })
    }
};

export const setP2pRadioButtonAction = (selectedValue) => {
    return (dispatch, getState) => {
        const { settings: { p2pradios } } = getState();
        const selectedP2pRadio = p2pradios.find(radio => radio.value === selectedValue);
        dispatch ({
            type: actions.SELECT_P2P_RADIO,
            selectedP2pRadio
        })
    }
};
