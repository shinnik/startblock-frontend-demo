import axios from 'axios';
import * as actions from './actionTypes';

const SAVING_SUCCESS_TIMEOUT = 1000;
// remove when there will be a connection
// with server
const MOCK_REQUEST_TIMEOUT = 1000;

export const saveSettings = () => {
    return (dispatch, getState) => {
        const { state } = getState();
        dispatch({ type: actions.SAVING });
        console.log("state: ", state);
        // axios.post('')
        Promise.resolve()
            .then(() => setTimeout(() => {
                        dispatch ({ type: actions.SAVING_SUCCESS });
                        setTimeout(() => dispatch({ type: actions.INIT_SAVING_BUTTON }), SAVING_SUCCESS_TIMEOUT)}, MOCK_REQUEST_TIMEOUT))
            .catch(() => dispatch ({ type: actions.SAVING_FAILED }))
    }
};
