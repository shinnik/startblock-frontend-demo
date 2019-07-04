import React, { useState } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { InputPair } from "../../containers/InputPair/InputPair";
import { nameInput, IpInput, capacityInput, costInput, powerInput } from "../../containers/InputPair/inputTypes";
import RadioButtonsGroup from '../../containers/RadioButtonsGroup/RadioButtonsGroup'

import styles from './SettingsPage.module.scss'
import {ParametersBlock} from "../../containers/ParametersBlock/ParametersBlock";
import {ServiceBox} from "../../containers/ServiceBox/ServiceBox";
import {DndList} from "../../containers/DndList/DndList";

export const SettingsPage = (props) => {

    const [radioButtonId, setRadioButtonId] = React.useState("nothing");
    const radios = [
    {value: 'nothing', label: 'Ничего нет'}, 
    {value: 'generator', label: 'Бензогенератор'}, 
    {value: 'sun', label: 'Солнечная панель'}, 
    {value: 'acc', label: 'Аккумуляторная батарея'}
    ];

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
                <RadioButtonsGroup value={radioButtonId} onChange={setRadioButtonId} variants={radios}/>
            </div>
           { radioButtonId &&
           <div className={styles.block}>
                <ParametersBlock variant={radioButtonId}/>
            </div> }
            <div className={styles.block}>
                <Typography style={{fontWeight: 600}}
                            variant="h5"
                            component="h2"
                            gutterBottom>
                    Сервисы
                </Typography>
                <ServiceBox variant='load'/>
                <ServiceBox variant='p2p'/>
                <ServiceBox variant='balance'/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return ({

    })
};

const mapDispatchToProps = dispatch => {
    return ({

    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
