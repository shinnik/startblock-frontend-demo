import * as actions from './actionTypes';

export const onGeneratorSelect = (selectedValue) => {
    return (dispatch, getState) => {
        const { settings: { radios } } = getState();
        const selectedGenerator = radios.find(radio => radio.value === selectedValue);
        dispatch ({
            type: actions.SELECT_RADIO,
            selectedGenerator
        })
    }
};
