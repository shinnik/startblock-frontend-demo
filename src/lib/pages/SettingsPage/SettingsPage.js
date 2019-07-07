import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { InputPair } from "../../containers/InputPair/InputPair";
import { nameInput, IpInput } from "../../containers/InputPair/inputTypes";
import RadioButtonsGroup from '../../containers/RadioButtonsGroup/RadioButtonsGroup'

import styles from './SettingsPage.module.scss'
import { ParametersBlock }from "../../containers/ParametersBlock/ParametersBlock";
import {ServiceBox} from "../../containers/ServiceBox/ServiceBox";
import { p2pradios } from "../../models/radiobuttons";

const SettingsPage = ({ selectedRadio }) => {

    return (
        <div>
            <div className={styles.block}>
                <Typography style={{fontWeight: 600}}
                            variant="h4"
                            component="h1"
                            gutterBottom>
                    Настройка энергетической ячейки
                </Typography>
                <InputPair first={nameInput}
                           second={IpInput}/>
            </div>
            <div className={styles.block}>
                <Typography style={{fontWeight: 600}}
                            variant="h5"
                            component="h2"
                            gutterBottom>
                    Подключенные генераторы и накопители
                </Typography>
                <RadioButtonsGroup />
            </div>
           { selectedRadio &&
           <div className={styles.block}>
                <ParametersBlock variant={selectedRadio} />
            </div> }
            <div className={styles.block}>
                <Typography style={{fontWeight: 600}}
                            variant="h5"
                            component="h2"
                            gutterBottom>
                    Сервисы
                </Typography>
                <ServiceBox variant='load'/>
                <ServiceBox variant='p2p' specific={p2pradios}/>
                <ServiceBox variant='balance'/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        selectedRadio: state.settings.selectedRadio
    })
};

const mapDispatchToProps = dispatch => {
    return ({

    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
