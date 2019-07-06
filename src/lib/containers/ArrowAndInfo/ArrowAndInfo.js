import React from 'react';
import styles from './ArrowAndInfo.module.scss';
import Typography from '@material-ui/core/Typography';
import * as c1 from "../../constants/names";
import * as c2 from "../../constants/names2";
import numberSeparator from "../../../utils/numberSeparator";

function ArrowAndInfo({ direction, amount, money, flag }) {
    const {currency, watt, energy, cost} = flag === 'current' ? c1 : c2;

    return <div className={styles.ArrowAndInfo}>
        <div style={{ paddingLeft: '20px', paddingTop: '20px' }}>
            <Typography variant='h5' color='secondary'>{amount && `${numberSeparator(amount)} ${watt}` || <br />}</Typography>
            <Typography variant='h5' color="textSecondary" >{money && `${money} ${cost}` || <br />}</Typography>
        </div>
        <div className={direction ? styles.TriangleUp : styles.TriangleDown} />
    </div>
}

export default ArrowAndInfo;
