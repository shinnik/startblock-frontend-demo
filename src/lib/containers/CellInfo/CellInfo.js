import React from 'react';
import styles from './CellInfo.module.scss';


function CellInfo({name, amount, money}) {
    return <div className={styles.CellInfo}>
        <b>{name}</b>
        <br/>
        {amount}
        <br/>
        {money}
    </div>
}

export default CellInfo;
