import axios from 'axios';
import * as actions from './actionTypes';
import * as constants from '../../lib/constants/endpoints';

const SAVING_SUCCESS_TIMEOUT = 1000;
const SAVING_FAILED_TIMEOUT = 1000;

export const saveSettings = () => {
    return (dispatch, getState) => {
        const { state } = getState();
        dispatch({ type: actions.SAVING });
        axios.post(constants.BACKEND_SERVER)
            .then(() => { dispatch ({ type: actions.SAVING_SUCCESS });
                        setTimeout(() => dispatch({ type: actions.INIT_SAVING_BUTTON }), SAVING_SUCCESS_TIMEOUT)
            })
            .catch(() => { dispatch ({ type: actions.SAVING_FAILED });
                           setTimeout(() => dispatch({ type: actions.INIT_SAVING_BUTTON }), SAVING_FAILED_TIMEOUT)
            })
    }
};
