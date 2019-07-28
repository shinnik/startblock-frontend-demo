import React, {useEffect, useState} from 'react';
import styles from './MainPage.module.scss';
import ArrowAndInfo from "../../containers/ArrowAndInfo/ArrowAndInfo";
import Delta from "../../containers/Delta/Delta";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MultiArrow from "../../containers/MultiArrow/MultiArrow";
import Container from '@material-ui/core/Container';
import MainWindowDialog from "./MainWindowDialog/MainWindowDialog";
import {connect} from "react-redux";
import * as actionCreators from '../../../store/actions/index';
import useWindowSize from "@rehooks/window-size";
import {BACKEND_SERVER_SETTINGS, BACKEND_SERVER_USERDATA} from "../../constants/endpoints";

const shift = {
    position: 'relative',
    left: '-9px'
};

async function fetchDataFromServer() {
    const response = await fetch(BACKEND_SERVER_USERDATA);
    const requestBody = JSON.stringify({
        mains: ['Gamma', '192.168.0.1'],
        currentGeneratorName: 'Бензогенератор',
        radios: [
            {
                label: 'Солнечная панель',
                inputTypes: [50, 1],
            },
            {
                label: 'Бензогенератор',
                inputTypes: [100, 11],
            },
            {
                label: 'Аккумулятор',
                inputTypes: [20, 100],
            },
        ],
        managedLoad: {
            status: true,
            items: [
                {
                    id: 1,
                    name: 'Kitchen',
                    priority: 1
                },
                {
                    id: 2,
                    name: 'Bathroom',
                    priority: 2
                },
                {
                    id: 3,
                    name: 'Dacha',
                    priority: 3
                }
            ]
        },
        p2p: {
            status: true,
            current: '0'
        },
        balance: {
            status: true
        }
    });

    const postRequestResponse = await fetch(BACKEND_SERVER_SETTINGS, {
        method: 'POST',
        body: requestBody,
    });

    console.log(await postRequestResponse.json());

    return new Promise(resolve => {
        response.json()
            .then(value => {
                let tmp = value;
                tmp.generator.cost = tmp.generator.propertyType === 'cost' && tmp.generator.propertyValue;
                resolve(tmp);
            })
    })
}

function MainPage({flag, multidata, multidata2, data, profile, onFetchData, onUnlock, onSetInterval, isIntervalExist, interval}) {
    const [open, setOpen] = useState(false);
    const windowSize = useWindowSize();

    useEffect(() => {
        fetchDataFromServer()
           .then(value => {
               onFetchData(value);
           });
        !isIntervalExist && setInterval(() => {
            onSetInterval();
            fetchDataFromServer()
                .then(value => {
                    onFetchData(value);
                })
        }, interval);
    }, []);

    return <div className={styles.MainPage}>
       <MainWindowDialog style={{zoom: Math.min(windowSize.innerWidth/700, 1)}} open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)} profile={profile} multidata={multidata} onUnlock={onUnlock} />

        <Container className={styles.Grid1} >
            <Box className={styles.Item1}>
                <Typography style={shift} variant='h4'><b>{data[0].type && data[0].type}</b></Typography>
                <ArrowAndInfo {...data[0]} flag={flag} />
            </Box>
            <Box className={styles.Item2}>
                <Typography style={shift} variant='h4'><b>{data[1].type && data[1].type}</b></Typography>
                <ArrowAndInfo {...data[1]} flag={flag} />
            </Box>
        </Container>

        <Box className={styles.Item5}>
            <Delta {...profile} pullOffFunc={() => setOpen(true)}/>
        </Box>

        <Container className={styles.Grid2} >
            <Box className={styles.Item3}>
                <ArrowAndInfo {...data[2]} flag={flag} />
                <Typography style={shift} variant='h4'><b>Соседние ячейки</b></Typography>
                <MultiArrow data={multidata} flag={flag} />
            </Box>
            <Box className={styles.Item4}>
                <ArrowAndInfo {...data[3]} flag={flag} />
                <Typography style={shift} variant='h4'><b>Нагрузка</b></Typography>
                <MultiArrow data={multidata2} flag={flag} />
            </Box>
        </Container>
    </div>;
}

const mapStateToProps = state => {
    return {
        multidata: state.mainPage.multidata,
        data: state.mainPage.data,
        multidata2: state.mainPage.multidata2,
        profile: state.mainPage.profile,
        isIntervalExist: state.fetcher.isIntervalExist,
        interval: state.fetcher.interval,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUnlock: (id) => dispatch(actionCreators.handleUnlocked(id)),
        onFetchData: (response) => dispatch(actionCreators.fetchData(response)),
        onSetInterval: () => dispatch(actionCreators.handleSetInterval())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
