import * as actionTypes from './actionTypes';

export const handleSetInterval = (value) => {
    return {
        type: actionTypes.SET_INTERVAL,
        payload: {
            value
        }
    }
};
