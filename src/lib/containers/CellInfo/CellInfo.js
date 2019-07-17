import React from 'react';
import styles from './CellInfo.module.scss';
import * as c1 from "../../constants/names";
import * as c2 from "../../constants/names2";
import Typography from '@material-ui/core/Typography';


function CellInfo({ name, amount, money, flag }) {
    const {currency, watt, energy, cost} = flag === 'current' ? c1 : c2;

    return <div className={styles.CellInfo}>
        {name && <Typography color={'textPrimary'} variant='h5'><b>{name}</b></Typography>}
        {amount !== undefined && <Typography color={'secondary'} variant='h5'>{`${amount} ${watt}`}</Typography>}
        {money !== undefined && <Typography color={'textSecondary'} variant='h5'>{`${money} ${cost}`}</Typography>}
    </div>
}

export default CellInfo;
