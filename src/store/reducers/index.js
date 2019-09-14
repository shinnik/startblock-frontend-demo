import { combineReducers } from 'redux';
import { settingsPageReducer }from './settingsPage';
import mainPageReducer from "./mainPage";
import fetcherReducer from "./fetcher";
import savingButtonReducer from "./savingButton";


export const reducers = combineReducers({
    settings: settingsPageReducer,
    mainPage: mainPageReducer,
    fetcher: fetcherReducer,
    sb: savingButtonReducer
});
