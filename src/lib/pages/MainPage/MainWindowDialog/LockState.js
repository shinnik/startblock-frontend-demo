import React from 'react';
import {IconButton, Typography} from "@material-ui/core";
import {LockOpen} from "@material-ui/icons";
// import Ellipse from "./LoadingIcon/Ellipse";
import {config} from "../../../../loc/current/config";

function LockState({istate, id, onUnlock}) {

    if (istate) {
        return <IconButton onClick={() => onUnlock(id)} color='primary'> <LockOpen/>
        </IconButton>;
    }
    else {
        return <Typography align={'center'} variant={'body1'} color={'textSecondary'}>{config.mainPage.dialog.content.table.unlocked.label}</Typography>;
    }

    // switch (state) {
    //     case 'locked':
    //         return <IconButton onClick={() => setState('unlocking')} color='primary'> <LockOpen/>
    //         </IconButton>;
    //     case 'unlocking':
    //         return <div align={'center'} > <Ellipse /> </div>;
    //     case 'unlocked':
    //         return <Typography align={'center'} variant={'body1'} color={'textSecondary'}>{config.mainPage.dialog.content.table.unlocked.label}</Typography>;
    //     default:
    //         return <Typography color={'error'}>ERROR</Typography>;
    // }
}


export default LockState;
