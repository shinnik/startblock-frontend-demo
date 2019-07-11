import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { InputPair } from "../../containers/InputPair/InputPair";
import RadioButtonsGroup from '../../containers/RadioButtonsGroup/RadioButtonsGroup'

import styles from './SettingsPage.module.scss'
import { ParametersBlock }from "../../containers/ParametersBlock/ParametersBlock";
import { ServiceBox } from "../../containers/ServiceBox/ServiceBox";
import {
    onGeneratorSelect,
    onParameterTyping,
    onNameAndIpTyping,
    onSelectStrategy,
    onChangeBalance,
    onChangeTrade,
    onChangeLoad,
    onReorderList,
    onRosetteNameTyping
} from "../../../store/actions/settingsPage";
import { ManagedLoadSpecific } from "../../containers/ManagedLoadSpecific/ManagedLoadSpecific";

const SettingsPage = (
    { currentGeneratorNumber,
        radios,
        onGeneratorChoose,
        onParameterChange,
        mainInputs,
        onNameOrIpChange,
        p2p,
        onStrategyChange,
        managedLoad,
        balance,
        onToggleTrade,
        onToggleBalance,
        onToggleLoad,
        onImportancyChange,
        onRosetteNameChange}) => {
    const currentGenerator = radios.get(currentGeneratorNumber);
    return (
        <div>
            <div className={styles.block}>
                <Typography style={{fontWeight: 600}}
                            variant="h4"
                            component="h1"
                            gutterBottom>
                    Настройка энергетической ячейки
                </Typography>
                <InputPair first={mainInputs.get(0)}
                           second={mainInputs.get(1)}
                           onTyping={onNameOrIpChange}/>
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
                <ServiceBox variant='load'
                            active={managedLoad.get('status')}
                            onToggle={onToggleLoad}
                            render={() => <ManagedLoadSpecific items={managedLoad.get('items')}
                                                               onReorder={onImportancyChange}
                                                               onChange={onRosetteNameChange}/> }/>
                <ServiceBox variant='p2p'
                            active={p2p.get('status')}
                            render={() => <RadioButtonsGroup onChange={onStrategyChange}
                                                             currentValue={p2p.get('current')}
                                                             radios={p2p.get('strategies')} />}
                            onToggle={onToggleTrade}/>
                <ServiceBox variant='balance'
                            active={balance.get('status')}
                            onToggle={onToggleBalance}/>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return ({
        mainInputs: state.settings.get('mains'),
        currentGeneratorNumber: state.settings.get('currentGeneratorNumber'),
        radios: state.settings.get('radios'),
        managedLoad: state.settings.get('managedLoad'),
        p2p: state.settings.get('p2p'),
        balance: state.settings.get('balance')
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        onNameOrIpChange: (param, value) => dispatch(onNameAndIpTyping(param, value)),
        onGeneratorChoose: (value) => dispatch(onGeneratorSelect(value)),
        onParameterChange: (param, value) => dispatch(onParameterTyping(param, value)),
        onToggleLoad: (value) => dispatch(onChangeLoad(value)),
        onImportancyChange: items => dispatch(onReorderList(items)),
        onRosetteNameChange: (index, value) => dispatch(onRosetteNameTyping(index, value)),
        onToggleTrade: value => dispatch(onChangeTrade(value)),
        onToggleBalance: value => dispatch(onChangeBalance(value)),
        onStrategyChange: value => dispatch(onSelectStrategy(value))

    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
