import React from 'react';
import styles from './Delta.module.scss';
import Paper from '@material-ui/core/Paper/index';
import Typography from '@material-ui/core/Typography/index';
import {currency} from "../../../loc/current/names";
import Button from '@material-ui/core/Button/index';
import { makeStyles, createStyles } from '@material-ui/styles';
import AnimatedNumbers from 'animated-number-react';
import {Box} from "@material-ui/core";
import {config} from "../../../loc/current/config";
import Hider from "../Hider/Hider";

const useStyles = makeStyles(theme => createStyles({
    button1: {
        color: 'black',
        backgroundColor: 'white',
        width: '132px',
        height: '40px'
    },
    button2: {
        color: 'white',
        border: '1px solid #FFFFFF',
        width: '85px',
        height: '40px'
    }
}));

function Delta({name, type, money, pullOffFunc}) {
    const classes = useStyles();

    return <Paper elevation={2} className={`${styles.Delta}`}>
        <Typography className={`${styles.Item1}`} variant='h3'> <b> {name} </b> </Typography>
        <Typography style={{fontSize:'15px'}} className={`${styles.Item5}`} variant='body1'> {type} </Typography>
        <Box className={`${styles.Item2}`}>
            <Typography style={{fontFamily: 'Roboto Mono'}}  variant='h3'> <b> <AnimatedNumbers value={money} formatValue={(x) => x.toFixed(0)} /> </b> </Typography>
            <Typography style={{fontSize:'15px'}} variant='body1'> {currency} </Typography>
        </Box>
        <Box className={styles.Item3}> <Button className={`${classes.button1}`} variant='contained' color='default'>{config.mainPage.delta.buttons.button1.label}</Button> </Box>
        <Box className={styles.Item4}> <Button onClick={pullOffFunc} className={`${classes.button2}`} variant='outlined' color='default' >{config.mainPage.delta.buttons.button2.label}</Button> </Box>
    </Paper>
}


export default Delta;
