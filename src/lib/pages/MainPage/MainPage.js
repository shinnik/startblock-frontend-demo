import React from 'react';
import styles from './MainPage.module.scss';
import ArrowAndInfo from "../../containers/ArrowAndInfo/ArrowAndInfo";
import Delta from "../../containers/Delta/Delta";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core";
import MultiArrow from "../../containers/MultiArrow/MultiArrow";

const data = [
    {
        amount: 612291,
        direction: false,
        type: 'Солнечная панель'
    },
    {
        amount: 612291,
        money: 91,
        direction: false,
        type: 'Сеть'
    },
    {
        amount: 612291,
        money: 91,
        direction: true,
    },
    {
        amount: 612291,
        direction: false,
    }
];

const profile = {
    name: 'Delta',
    type: 'Энергетическая ячейка',
    money: 1125
};

const shift = {
    position: 'relative',
    left: '-5px'
};

function MainPage() {

    return <div className={styles.MainPage}>
        <Box className={styles.Item1}>
            <Typography style={shift} variant='h5'>{data[0].type && data[0].type}</Typography>
            <ArrowAndInfo {...data[0]} />
        </Box>
        <Box className={styles.Item2}>
            <Typography style={shift} variant='h5'>{data[1].type && data[1].type}</Typography>
            <ArrowAndInfo {...data[1]} />
        </Box>
        <Box className={styles.Item3}>
            <ArrowAndInfo {...data[2]} />
            <Typography style={shift} variant='h5'>Соседние ячейки</Typography>
        </Box>
        <Box className={styles.Item4}>
            <ArrowAndInfo {...data[3]} />
            <Typography style={shift} variant='h5'>Нагрузка</Typography>
        </Box>
        <Box className={styles.Item5}>
            <Delta {...profile} />
        </Box>
    </div>;
}

export default MainPage;
