import React from 'react';
import styles from './Delta.module.scss';
import Paper from '@material-ui/core/Paper/index';
import Typography from '@material-ui/core/Typography/index';
import {currency} from "../../constants/names";
import Button from '@material-ui/core/Button/index';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(theme => createStyles({
    delta: {
        backgroundColor: '#0099DC',
    },
    deltafont: {
        color: 'white',
    },
    button1: {
        color: 'black',
        backgroundColor: 'white',
    },
    button2: {
        color: 'white',
        border: '1px solid #FFFFFF',
    }
}));

function Delta({name, type, money}) {
    const classes = useStyles();

    return <Paper className={`${classes.delta} ${styles.Delta}`}>
            <Typography className={`${styles.Item1} ${classes.deltafont}`} variant='h3'> <b> {name} </b> </Typography>
            <Typography className={`${styles.Item5} ${classes.deltafont}`} variant='body1'> {type} </Typography>
            <Typography className={`${styles.Item2} ${classes.deltafont}`} variant='h3'> <b> {money} </b> </Typography>
            <Typography className={`${styles.Item6} ${classes.deltafont}`} variant='body1'> {currency} </Typography>
            <Button className={`${styles.Item3} ${classes.button1}`} variant='contained' color='default'>Пополнить</Button>
            <Button className={`${styles.Item4} ${classes.button2}`} variant='outlined' color='default' >Снять</Button>
    </Paper>
}


export default Delta;
