import React from 'react';
import styles from './ArrowAndInfo.module.scss';
import PaddingWrapper from "../../wrappers/padding/PaddingWrapper";
import Typography from '@material-ui/core/Typography';
import {currency, energy} from "../../constatnts/names";


function ArrowAndInfo({direction, amount, money}) {
    return <div className={styles.ArrowAndInfo}>
        <PaddingWrapper>
            <Typography variant='h5' color='secondary'>{amount && `${amount} ${energy}` || <br/>}</Typography>
            <Typography variant='h5' color="textSecondary" >{money && `${money} ${currency}` || <br/>}</Typography>
        </PaddingWrapper>
        <div className={direction ? styles.TriangleUp : styles.TriangleDown} />
    </div>
}

export default ArrowAndInfo;
