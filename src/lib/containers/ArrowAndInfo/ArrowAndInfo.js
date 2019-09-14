import React from 'react';
import styles from './ArrowAndInfo.module.scss';
import {Typography, Box} from '@material-ui/core';
import * as c1 from "../../../loc/current/names";
import * as c2 from "../../../loc/current/names2";
import numberSeparator from "../../../utils/numberSeparator";

function ArrowAndInfo({ direction, amount, money, flag, active }) {
    const {watt, cost} = flag === 'current' ? c1 : c2;

    return <div className={!active ? styles.ArrowAndInfo__grey : styles.ArrowAndInfo}>
        <Box className={styles.Box}>
            {amount !== undefined && <Typography display={"inline"} style={{fontFamily: 'Roboto Mono'}}  variant='h4' color='secondary'>{numberSeparator(amount)}</Typography>}
            {amount !== undefined && <Typography display={"inline"} color={"secondary"} variant={'h5'}>&nbsp;{`${watt}`}</Typography>}
            {amount !== undefined && <br/>}
            {money !== undefined && <Typography display={"inline"} style={{fontFamily: 'Roboto Mono'}}  variant='h4' color="textSecondary" >{numberSeparator(money)}</Typography>}
            {money !== undefined && <Typography display={"inline"} variant={'h5'} color={"textSecondary"} >&nbsp;{cost}</Typography>}
            {money !== undefined && <br/>}
        </Box>
        { active && <div className={direction ? styles.TriangleUp : styles.TriangleDown}/> }
    </div>
}

export default ArrowAndInfo;
