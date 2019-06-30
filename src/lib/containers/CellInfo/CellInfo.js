import React from 'react';
import styles from './CellInfo.module.scss';
import {currency, energy} from "../../constatnts/names";
import Typography from '@material-ui/core/Typography';


function CellInfo({name, amount, money}) {
    return <div className={styles.CellInfo}>
        {name && <Typography color='textPrimary' variant='h5'><b>{name}</b></Typography>}
        {amount && <Typography color='secondary' variant='h6'>{amount} {energy}</Typography>}
        {money && <Typography color='textSecondary' variant='h6'>{money} {currency}</Typography>}
    </div>
}

export default CellInfo;
