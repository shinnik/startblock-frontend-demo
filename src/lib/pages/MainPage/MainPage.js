import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import ArrowAndInfo from "../../containers/ArrowAndInfo/ArrowAndInfo";
import Delta from "../../containers/Delta/Delta";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MultiArrow from "../../containers/MultiArrow/MultiArrow";
import Container from '@material-ui/core/Container';
import MainWindowDialog from "./MainWindowDialog/MainWindowDialog";

const data = [
    {
        amount: 612291,
        direction: false,
        type: 'Солнечная панель',
        money: 91
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
    money: 1125,
    blocked: 504
};

const shift = {
    position: 'relative',
    left: '-5px'
};

const multidata2 = [
    {
        name: 'Туалет',
        amount: 52,
        output: false,
        active: false
    },
    {
        name: 'Комната',
        amount: 2,
        output: false,
        active: false
    },
    {
        name: 'Кухня',
        amount: 512,
        output: false,
        active: true
    },
    {
        name: 'Туалет',
        amount: 52,
        output: false,
        active: false
    },
    {
        name: 'Комната',
        amount: 2,
        output: false,
        active: true
    },
    {
        name: 'Кухня',
        amount: 512,
        output: false,
        active: true
    },
];

//state = {locked, unlocking, unlocked}
const multidata = [
    {
        name: 'Alpha',
        amount: 52,
        money: 5,
        blocked: 8,
        state: 'locked',
        output: true,
        active: true
    },
    {
        name: 'Beta',
        amount: 2,
        money: 1,
        blocked: 401,
        state: 'unlocking',
        output: true,
        active: false
    },
    {
        name: 'Gamma',
        amount: 512,
        money: 59,
        blocked: 95,
        state: 'unlocked',
        output: true,
        active: true
    },
    {
        name: 'Alpha',
        amount: 52,
        money: 5,
        blocked: 8,
        state: 'locked',
        output: true,
        active: false
    },
    {
        name: 'Beta',
        amount: 2,
        money: 1,
        blocked: 401,
        state: 'unlocking',
        output: true,
        active: false
    },
    {
        name: 'Gamma',
        amount: 512,
        money: 59,
        blocked: 95,
        state: 'unlocked',
        output: true,
        active: false
    },
];


function MainPage({flag}) {
    const [open, setOpen] = useState(false);

    return <div className={styles.MainPage}>
       <MainWindowDialog open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)} profile={profile} multidata={multidata} />

        <Container className={styles.Grid1} >
            <Box className={styles.Item1}>
                <Typography style={shift} variant='h4'><b>{data[0].type && data[0].type}</b></Typography>
                <ArrowAndInfo {...data[0]} />
            </Box>
            <Box className={styles.Item2}>
                <Typography style={shift} variant='h4'><b>{data[1].type && data[1].type}</b></Typography>
                <ArrowAndInfo {...data[1]} />
            </Box>
        </Container>

        <Box className={styles.Item5}>
            <Delta {...profile} pullOffFunc={() => setOpen(true)}/>
        </Box>

        <Container className={styles.Grid2} >
            <Box className={styles.Item3}>
                <ArrowAndInfo {...data[2]} />
                <Typography style={shift} variant='h4'><b>Соседние ячейки</b></Typography>
                <MultiArrow data={multidata} />
            </Box>
            <Box className={styles.Item4}>
                <ArrowAndInfo {...data[3]} />
                <Typography style={shift} variant='h4'><b>Нагрузка</b></Typography>
                <MultiArrow data={multidata2} />
            </Box>
        </Container>
    </div>;
}

export default MainPage;
