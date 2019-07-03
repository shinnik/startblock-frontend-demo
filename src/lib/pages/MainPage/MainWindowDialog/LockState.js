import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import {LockOpen} from "@material-ui/icons";

function LockState({state}) {
    switch (state) {
        case 'locked':
            return <IconButton color='primary'> <LockOpen/>
            </IconButton>;
        case 'unlocking':
            return <div>Unlocking</div>;
        case 'unlocked':
            return <div>Unlocked</div>;
        default:
            return <div>ERROR</div>;
    }
}


export default LockState;
