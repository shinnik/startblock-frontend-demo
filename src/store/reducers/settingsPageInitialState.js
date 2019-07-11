import * as inputTypes from '../../lib/containers/InputPair/inputTypes';
import { p2pradios } from "../../lib/models/radiobuttons";
import { fromJS } from "immutable";


export const initialState = fromJS({
  mains: [inputTypes.nameInput, inputTypes.IpInput],
  currentGeneratorNumber: '0',
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
      status: true
  }
});
