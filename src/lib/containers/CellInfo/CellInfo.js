import React from 'react';
import styles from './CellInfo.module.scss';
import {currency, energy} from "../../constatnts/names";


function CellInfo({name, amount, money}) {
    return <div className={styles.CellInfo}>
        {name && <b>{name}</b>}
        <br/>
        {amount && `${amount} ${energy}`}
        <br/>
        {money && `${money} ${currency}`}
    </div>
}

export default CellInfo;
