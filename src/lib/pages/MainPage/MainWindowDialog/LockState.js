import React, {useEffect, useState} from 'react';
import {IconButton, Typography} from "@material-ui/core";
import {LockOpen} from "@material-ui/icons";
import Ellipse from "./LoadingIcon/Ellipse";

function LockState({istate, id}) {
    const [state, setState] = useState(istate);
    useEffect((id) => {
        if (state === 'unlocking') {
            new Promise((res, rej) => {
                setTimeout(() => res(0), 1000);
            })
                .then(value => {
                    if (value === 0) {
                        setState('unlocked');
                    }
                })
        }
    });

    switch (state) {
        case 'locked':
            return <IconButton onClick={() => setState('unlocking')} color='primary'> <LockOpen/>
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
