import React from 'react';
import styles from './CellInfo.module.scss';
import * as c1 from "../../constants/names";
import * as c2 from "../../constants/names2";
import Typography from '@material-ui/core/Typography';


function CellInfo({ name, amount, money, flag }) {
    const {watt, cost} = flag === 'current' ? c1 : c2;

    return <div className={styles.CellInfo}>
        {name && <Typography color={'textPrimary'} variant='h5'><b>{name}</b></Typography>}
        {amount !== undefined && <Typography style={{fontFamily: 'Roboto Mono'}} display={"inline"} color={'secondary'} variant='h5'>{`${amount}`}</Typography> }
        {amount !== undefined && <Typography display={"inline"} color={'secondary'} variant='h5'>&nbsp;{`${watt}`}</Typography>}
        <br/>
        {money !== undefined && <Typography style={{fontFamily: 'Roboto Mono'}}  display={"inline"} color={'textSecondary'} variant='h5'>{`${money}`}</Typography> }
        {money !== undefined && <Typography display={"inline"} color={'textSecondary'} variant='h5' > {`${cost}`}</Typography>}
    </div>
}

export default CellInfo;
