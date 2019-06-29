import React, {PureComponent} from 'react';
import styles from './MainPage.module.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {currency} from "../../constatnts/names";
import Button from '@material-ui/core/Button';


function MainPage({name, type, money}) {
    return <Paper className={styles.MainPage}>
        <Typography className={styles.Item1} variant='h3'> {name} </Typography>
        <Typography className={styles.Item5} variant='body1'> {type} </Typography>
        <Typography className={styles.Item2} variant='h3'> {money} </Typography>
        <Typography className={styles.Item6} variant='body1'> {currency} </Typography>
        <Button className={styles.Item3} variant='contained' color='default'>Пополнить</Button>
        <Button className={styles.Item4} variant='outlined' color='default' >Снять</Button>

        </Paper>
}


export default MainPage;
