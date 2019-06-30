import React from 'react';
import styles from './ArrowAndInfo.module.scss';
import Typography from '@material-ui/core/Typography';
import {currency, energy} from "../../constatnts/names";
import numberSeparator from "../../../utils/numberSeparator";


function ArrowAndInfo({direction, amount, money}) {
    return <div className={styles.ArrowAndInfo}>
        <div style={{paddingLeft: '20px', paddingTop: '20px'}}>
            <Typography variant='h5' color='secondary'>{amount && `${numberSeparator(amount)} ${energy}` || <br/>}</Typography>
            <Typography variant='h5' color="textSecondary" >{money && `${money} ${currency}` || <br/>}</Typography>
        </div>
        <div className={direction ? styles.TriangleUp : styles.TriangleDown} />
    </div>
}

export default ArrowAndInfo;
