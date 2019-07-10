import { combineReducers } from 'redux';
import { settingsPageReducer }from './settingsPage';

export const reducers = combineReducers({
    settings: settingsPageReducer
})
