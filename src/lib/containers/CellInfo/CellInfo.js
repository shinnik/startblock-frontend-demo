import React from 'react';
import styles from './CellInfo.module.scss';
import {currency, energy} from "../../constatnts/names";


function CellInfo({name, amount, money}) {
    return <div className={styles.CellInfo}>
        <b>{name}</b>
        <br/>
        {`${amount} ${energy}`}
        <br/>
        {`${money} ${currency}`}
    </div>
}

export default CellInfo;
