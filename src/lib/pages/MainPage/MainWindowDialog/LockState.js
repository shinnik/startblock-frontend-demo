import React from 'react';
import {IconButton, Typography} from "@material-ui/core";
import {LockOpen} from "@material-ui/icons";
import Ellipse from "./LoadingIcon/Ellipse";

function LockState({state}) {
    switch (state) {
        case 'locked':
            return <IconButton color='primary'> <LockOpen/>
            </IconButton>;
        case 'unlocking':
            return <div align={'center'} > <Ellipse /> </div>;
        case 'unlocked':
            return <Typography align={'center'} variant={'body1'} color={'textSecondary'}>Готово</Typography>;
        default:
            return <Typography color={'error'}>ERROR</Typography>;
    }
}


export default LockState;
