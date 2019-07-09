import { combineReducers } from 'redux';
import buttonModal from './buttonModal';
import { radioGroupReducer }from './radioButtonsGroup';
import mainPageReducer from "./mainPage";

export const reducers = combineReducers({
    settings: radioGroupReducer,
    mainPage: mainPageReducer,
});

