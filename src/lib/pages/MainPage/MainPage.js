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
import {BACKEND_SERVER, BACKEND_SERVER_USERDATA} from "../../constants/endpoints";
import {config, generatorNames} from "../../../loc/current/config";
import {response as mockResponse} from "../../../store/mockData/backendMockData";
import Hider from "../../containers/Hider/Hider";


const shift = {
    position: "relative",
    left: "-9px"
};

const GETTING_MOCK_DATA = true;

async function getUserDataFromBackend() {
    if (GETTING_MOCK_DATA) {
        const result = Object.assign({}, mockResponse);
        result.generator.cost = mockResponse.generator.propertyType === 'cost' && mockResponse.generator.propertyValue;
        return result;
    }
    else {
        const response = await fetch(BACKEND_SERVER_USERDATA);
        return new Promise(resolve => {
            response.json()
                .then(value => {
                    let tmp = value;
                    tmp.generator.cost = tmp.generator.propertyType === 'cost' && tmp.generator.propertyValue;
                    resolve(tmp);
                })
        })
    }

}

async function deleteChannelbyNeighbourId(id) {
    const response = await fetch(`${BACKEND_SERVER}/closechannel/${id}`, {
        method: 'POST'
    });
    const json = await response.json();
    console.log('Closing channels result: ', json);
}

function MainPage({flag, multidata, multidata2, data, profile, handleUserDataFromBackend, onUnlock, setDataFetchingInterval, isIntervalExist, interval}) {
    const [isMainWindowDialogOpened, setIsMainWindowDialogOpened] = useState(false);
    const windowSize = useWindowSize();

    useEffect(() => {
        getUserDataFromBackend()
           .then(fetchedData => {
               handleUserDataFromBackend(fetchedData);
           });
        !isIntervalExist && setInterval(() => {
            setDataFetchingInterval(true);
            getUserDataFromBackend()
                .then(fetchedData => {
                    handleUserDataFromBackend(fetchedData);
                })
        }, interval);
    }, []);

    return <div className={styles.MainPage}>
       <MainWindowDialog
           style={{zoom: Math.min(windowSize.innerWidth/700, 1)}}
           open={isMainWindowDialogOpened}
           onClose={() => setIsMainWindowDialogOpened(false)}
           onOpen={() => setIsMainWindowDialogOpened(true)}
           profile={profile} multidata={multidata}
           onUnlock={id => deleteChannelbyNeighbourId(id)} />
           <Container className={styles.Grid1} >
               <Hider predicate={data[0].type === undefined || data[0].type === 'absent'}>
                   <Box className={styles.Item1}>
                       <Typography style={shift} variant='h4'><b>{data[0].type && generatorNames[ data[0].type ]}</b></Typography>
                       <ArrowAndInfo {...data[0]} flag={flag} />
                   </Box>
               </Hider>
               <Hider predicate={data[1].type === undefined}>
                   <Box className={styles.Item2}>
                       <Typography style={shift} variant='h4'><b>{config.mainPage.headings.net.label}</b></Typography>
                       <ArrowAndInfo {...data[1]} flag={flag} />
                   </Box>
               </Hider>
           </Container>
       <Box className={styles.Item5}>
           <Delta {...profile} pullOffFunc={() => setIsMainWindowDialogOpened(true)}/>
       </Box>
       <Container className={styles.Grid2} >
           <Hider predicate={data[2].amount === undefined}>
               <Box className={styles.Item3}>
                   <ArrowAndInfo {...data[2]} flag={flag} />
                   <Typography style={shift} variant='h4'><b>{config.mainPage.headings.neighbours.label}</b></Typography>
                   <MultiArrow data={multidata} flag={flag} />
               </Box>
           </Hider>
           <Hider predicate={data[3].amount === undefined}>
               <Box className={styles.Item4}>
                   <ArrowAndInfo {...data[3]} flag={flag} />
                   <Typography style={shift} variant='h4'><b>{config.mainPage.headings.load.label}</b></Typography>
                   <MultiArrow data={multidata2} flag={flag} />
               </Box>
           </Hider>
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
        handleUserDataFromBackend: (response) => dispatch(actionCreators.fetchData(response)),
        setDataFetchingInterval: (value) => dispatch(actionCreators.handleSetInterval(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
