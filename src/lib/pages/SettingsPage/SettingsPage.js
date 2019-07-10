import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { InputPair } from "../../containers/InputPair/InputPair";
import { nameInput, IpInput } from "../../containers/InputPair/inputTypes";
import RadioButtonsGroup from '../../containers/RadioButtonsGroup/RadioButtonsGroup'

import styles from './SettingsPage.module.scss'
import { ParametersBlock }from "../../containers/ParametersBlock/ParametersBlock";
import { ServiceBox } from "../../containers/ServiceBox/ServiceBox";
import { onGeneratorSelect, onParameterTyping } from "../../../store/actions/settingsPage";

const SettingsPage = ({ currentGeneratorNumber, radios, onGeneratorChoose, onParameterChange }) => {
    const currentGenerator = radios.get(currentGeneratorNumber);
    console.log(currentGenerator.get('value'));
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
                <RadioButtonsGroup radios={radios}
                                   currentValue={currentGeneratorNumber}
                                   onChange={onGeneratorChoose} />
            </div>
           { currentGeneratorNumber !== 0 &&
           <div className={styles.block}>
                <ParametersBlock onTyping={onParameterChange} inputs={currentGenerator.get('inputTypes')} />
            </div> }
            <div className={styles.block}>
                <Typography style={{fontWeight: 600}}
                            variant="h5"
                            component="h2"
                            gutterBottom>
                    Сервисы
                </Typography>
                <ServiceBox variant='load'/>
                <ServiceBox variant='p2p' />
                <ServiceBox variant='balance'/>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return ({
        // name: state.settings.name,
        // ip: state.settings.ip,
        currentGeneratorNumber: state.settings.get('currentGeneratorNumber'),
        radios: state.settings.get('radios'),
        // managedLoad: state.settings.managedLoad,
        // p2p: state.settings.p2p,
        // balance: state.settings.balance
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        // onNameChange: (value) => dispatch(onNameTyping(value)),
        // onIpChange: (value) => dispatch(onIpTyping(value)),
        onGeneratorChoose: (value) => dispatch(onGeneratorSelect(value)),
        onParameterChange: (param, value) => dispatch(onParameterTyping(param, value))
        // onToggleLoad: (value) => dispatch(onChangeLoad(value)),
        // onImportancyChange: (importancies) => dispatch(onReorderList(importancies)),
        // onRosetteNameChange: (index, value) => dispatch(onListInputTyping(index, value)),
        // onToggleTrade: (value) => dispatch(onChangeTrade(value)),
        // onStrategyChange: (value) => dispatch(onSelectStrategy(value))

    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
