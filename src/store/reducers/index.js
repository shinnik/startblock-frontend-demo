import { combineReducers } from 'redux';
import buttonModal from './buttonModal';
import { settingsPageReducer }from './settingsPage';

export const reducers = combineReducers({
    settings: settingsPageReducer
})
