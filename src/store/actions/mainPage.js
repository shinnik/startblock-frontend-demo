import * as actionTypes from './actionTypes';
import {parseResponse} from "../../utils/parseResponse";


export const handleUnlocked = (id) => {
    return {
        type: actionTypes.MODAL_WINDOW_UNLOCKED,
        payload: {
            id
        }
    }
};

export const fetchData = (response) => {
    return {
        type: actionTypes.MAIN_PAGE_FETCH_DATA,
        payload: {
            ...parseResponse(response)
        }
    }
};
