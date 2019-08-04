import * as inputTypes from '../../lib/containers/InputPair/inputTypes';
import { p2pradios } from "../../lib/models/radiobuttons";
import { fromJS } from "immutable";
import {config} from "../../loc/current/config";


export const initialState = fromJS({
  mains: [inputTypes.nameInput, inputTypes.IpInput],
  currentGeneratorNumber: '0',
  radios: [
      {
          value: '',
          label: config.settingsPage.radioButtons.radios.nothing.label,
          header: ''
      },
      {
          value: 'generator',
          label: config.settingsPage.radioButtons.radios.gasGenerator.label,
          header: config.settingsPage.radioButtons.radios.gasGenerator.heading,
          inputTypes: [inputTypes.powerInput, inputTypes.costInput]
      },
      {
          value: 'sun',
          label: config.settingsPage.radioButtons.radios.solarPanel.label,
          header: config.settingsPage.radioButtons.radios.solarPanel.heading,
          inputTypes: [inputTypes.powerInput, inputTypes.costInput]
      },
      {
          value: 'acc',
          label: config.settingsPage.radioButtons.radios.accumulator.label,
          header: config.settingsPage.radioButtons.radios.accumulator.heading,
          inputTypes: [inputTypes.powerInput, inputTypes.capacityInput]
      }
  ],
  managedLoad: {
      status: true,
      items: [{
              id: '1',
              name: 'Кухня'
          },
          {
              id: '2',
              name: 'Комната'
          },
          {
              id: '3',
              name: 'Туалет'
          }]
  },
  p2p: {
      status: true,
      strategies: p2pradios,
      current: '0'
  },
  balance: {
      status: false
  }
});
