import { combineReducers } from 'redux';
import { settingsPageReducer }from './settingsPage';
import mainPageReducer from "./mainPage";


export const reducers = combineReducers({
    settings: settingsPageReducer,
    mainPage: mainPageReducer,
});
