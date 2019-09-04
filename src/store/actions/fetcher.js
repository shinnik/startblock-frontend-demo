import * as actionTypes from './actionTypes';

export const handleSetInterval = (value, id) => {
    return {
        type: actionTypes.SET_INTERVAL,
        payload: {
            value,
            id
        }
    }
};

export const handleSetEndpoint = value => {
    return {
        type: actionTypes.SET_ENDPOINT,
        payload: {
            value
        }
    }
};
