import { combineReducers } from 'redux';
import buttonModal from './buttonModal';
import { radioGroupReducer }from './radioButtonsGroup';

export const reducers = combineReducers({
    settings: radioGroupReducer
})
