import React, {PureComponent} from 'react';
import styles from './Delta.module.scss';
import Paper from '@material-ui/core/Paper/index';
import Typography from '@material-ui/core/Typography/index';
import {currency} from "../../constatnts/names";
import Button from '@material-ui/core/Button/index';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core";


function Delta({name, type, money}) {
    return <Box className={styles.Box}>
        <Paper className={styles.Delta}>
            <span className={styles.Item1} variant='h3'> {name} </span>
            <span className={styles.Item5} variant='body1'> {type} </span>
            <span className={styles.Item2} variant='h3'> {money} </span>
            <span className={styles.Item6} variant='body1'> {currency} </span>
            <Button className={styles.Item3} variant='contained' color='default'>Пополнить</Button>
            <Button className={styles.Item4} variant='outlined' color='default' >Снять</Button>
        </Paper>
    </Box>
}


export default Delta;
