import * as actions from './actionTypes';

export const selectGeneratorType = (selectedValue) => {
    return {
        type: actions.SELECT_TYPE,
        selectedValue
    }
}
