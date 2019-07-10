import * as actions from './actionTypes';

export const onGeneratorSelect = selectedValue => {
  console.log(selectedValue);
    return {
      type: actions.SELECT_RADIO,
      selectedGenerator: selectedValue
    }
};

export const onParameterTyping = (param, value) => {
  return {
    type: actions.CHANGE_PARAMETER_VALUE,
    payload: { param, value }
  }
}
