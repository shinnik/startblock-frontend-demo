import * as actions from './actionTypes';
import axios from 'axios';

export const onGeneratorSelect = selectedValue => {
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
};

export const onNameAndIpTyping = (param, value) => {
  return {
    type: actions.TYPE_INFO,
    payload: { param, value }
  }
}

export const onSelectStrategy = value => {
  return {
    type: actions.SELECT_STRATEGY,
      value
  }
};

export const onChangeTrade = value => {
  return {
    type: actions.TOGGLE_TRADE,
      value
  }
}

export const onChangeLoad = value => {
    return {
        type: actions.TOGGLE_LOAD,
        value
    }
}

export const onChangeBalance = value => {
    return {
        type: actions.TOGGLE_BALANCE,
        value
    }
}

export const onReorderList = items => {
    return {
        type: actions.CHANGE_IMPORTANCY,
        items
    }
}

export const onRosetteNameTyping = (id, value) => {
  console.log(id, value);
    return {
        type: actions.CHANGE_ROSETTE_NAME,
        payload: { id, value }
    }
};

export const onInit = () => {
    return dispatch => {
        axios.get('localhost:8888/meters/0xCB32de2b9d1f1Efb4abDE7d24131eBeD6c649ad7/settingsdata')
            .then(({data}) => console.log(data))
    }
}
