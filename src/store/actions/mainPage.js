import * as actionTypes from './actionTypes';
import {parseResponse} from "../../utils/parseResponse";
import {BACKEND_SERVER_USERDATA} from "../../lib/constants/endpoints";


export const handleUnlocked = (id) => {
    return {
        type: actionTypes.MODAL_WINDOW_UNLOCKED,
        payload: {
            id
        }
    }
};

export const fetchData = (response, endpoint) => {
    return {
        type: actionTypes.MAIN_PAGE_FETCH_DATA,
        payload: {
            ...parseResponse(response),
            flag: endpoint === BACKEND_SERVER_USERDATA ? 'current' : 'month'
        }
    }
};
