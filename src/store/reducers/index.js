import { combineReducers } from 'redux';
import buttonModal from './buttonModal';
import settingsPage from './settingsPage';

export const reducers = combineReducers({
    sp: settingsPage
})
