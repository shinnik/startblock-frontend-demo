import * as inputTypes from '../../lib/containers/InputPair/inputTypes';
import { p2pradios } from "../../lib/models/radiobuttons";
import { fromJS } from "immutable";
import {config} from "../../loc/current/config";


export const initialState = fromJS({
  mains: [inputTypes.nameInput, inputTypes.IpInput],
  currentGeneratorName: 'absent',
  radios: [
      {
          value: 'absent',
          label: config.settingsPage.radioButtons.radios.nothing.label,
          header: ''
      },
      {
          value: 'benz',
          label: config.settingsPage.radioButtons.radios.benz.label,
          header: config.settingsPage.radioButtons.radios.benz.heading,
          inputTypes: [inputTypes.powerInput, inputTypes.costInput]
      },
      {
          value: 'sun',
          label: config.settingsPage.radioButtons.radios.sun.label,
          header: config.settingsPage.radioButtons.radios.sun.heading,
          inputTypes: [inputTypes.powerInput, inputTypes.costInput]
      },
      {
          value: 'acc',
          label: config.settingsPage.radioButtons.radios.acc.label,
          header: config.settingsPage.radioButtons.radios.acc.heading,
          inputTypes: [inputTypes.powerInput, inputTypes.capacityInput]
      }
  ],
  managedLoad: {
      status: false,
      items: []
  },
  p2p: {
      status: false,
      strategies: p2pradios,
      current: '0'
  },
  balance: {
      status: false
  }
});
