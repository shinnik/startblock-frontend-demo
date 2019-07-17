import React from 'react';
import styles from './ArrowAndInfo.module.scss';
import {Typography, Box} from '@material-ui/core';
import * as c1 from "../../constants/names";
import * as c2 from "../../constants/names2";
import numberSeparator from "../../../utils/numberSeparator";

function ArrowAndInfo({ direction, amount, money, flag }) {
    const {currency, watt, energy, cost} = flag === 'current' ? c1 : c2;

    return <div className={styles.ArrowAndInfo}>
        <Box className={styles.Box}>
            {amount && <Typography display={"inline"} style={{fontFamily: 'Roboto Mono'}}  variant='h4' color='secondary'>{numberSeparator(amount)}</Typography>}
            {amount && <Typography display={"inline"} color={"secondary"} variant={'h5'}>&nbsp;{`${watt}`}</Typography>}
            {!amount && <br/>}
            <br/>
            {money && <Typography display={"inline"} style={{fontFamily: 'Roboto Mono'}}  variant='h4' color="textSecondary" >{numberSeparator(money)}</Typography>}
            {money && <Typography display={"inline"} variant={'h5'} color={"textSecondary"} >&nbsp;{cost}</Typography>}
            {!money && <br/>}
        </Box>
        <div className={direction ? styles.TriangleUp : styles.TriangleDown} />
    </div>
}

export default ArrowAndInfo;
