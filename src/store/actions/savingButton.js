import * as actions from './actionTypes';
import * as constants from '../../lib/constants/endpoints';

const SAVING_SUCCESS_TIMEOUT = 1000;
const SAVING_FAILED_TIMEOUT = 1000;

export const saveSettings = () => {
    return (dispatch, getState) => {
        const {settings}  = getState();
        const jsonState = settings.toJS();
        const currentState = {
            mains: [jsonState.mains[0].value, jsonState.mains[1].value],
            currentGeneratorName: jsonState.currentGeneratorName,
            radios: jsonState.radios.map(value => {
                return {
                    label: value.value,
                    inputTypes: value.inputTypes && value.inputTypes.map(value1 => value1.value)
                }
            }),
            managedLoad: {
                status: jsonState.managedLoad.status,
                items: jsonState.managedLoad.items
            },
            p2p: jsonState.p2p,
            balance: jsonState.balance
        };
        dispatch({ type: actions.SAVING });
        fetch(constants.BACKEND_SERVER_SETTINGS, {
            method: 'POST',
            body: JSON.stringify(currentState)
            })
            .then(() => { dispatch ({ type: actions.SAVING_SUCCESS });
                setTimeout(() => dispatch({ type: actions.INIT_SAVING_BUTTON }), SAVING_SUCCESS_TIMEOUT)
            })
            .catch(() => { console.log('HERE@!'); dispatch ({ type: actions.SAVING_FAILED });
                setTimeout(() => dispatch({ type: actions.INIT_SAVING_BUTTON }), SAVING_FAILED_TIMEOUT)
            })

        // axios.post(constants.BACKEND_SERVER_SETTINGS, currentState, {
        //     headers: {
        //         "Access-Control-Allow-Origin": "*",
        //     }
        // })
        //     .then(() => { dispatch ({ type: actions.SAVING_SUCCESS });
        //                 setTimeout(() => dispatch({ type: actions.INIT_SAVING_BUTTON }), SAVING_SUCCESS_TIMEOUT)
        //     })
        //     .catch(() => { dispatch ({ type: actions.SAVING_FAILED });
        //                    setTimeout(() => dispatch({ type: actions.INIT_SAVING_BUTTON }), SAVING_FAILED_TIMEOUT)
        //     })
    }
};
