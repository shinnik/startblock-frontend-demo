import React from 'react';
import Radio from '@material-ui/core/Radio';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import styles from './RadioButtonsGroup.module.scss';
import {setRadioButtonAction, setP2pRadioButtonAction} from "../../../store/actions/radioButtonsGroup";
import connect from "react-redux/es/connect/connect";

const WhiteRadio = withStyles({
    root: {
        color: '#FFFFFF',
        '&$checked': {
            color: '#FFFFFF',
        },
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    checked: {},
    hover: {}
})(props => <Radio color="default" {...props} />);

const useStyles = makeStyles(theme => ({
    label: {
        fontFamily: theme.typography.fontFamily,
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.44px',
    }
}))

function RadioButtonsGroup({ setRadioButton, setP2pRadioButton, radios, p2pradios, selectedP2pRadio, selectedRadio, variant }) {

    let selected = selectedRadio.value;
    let items = radios;
    let onChange = setRadioButton;
    const classes = useStyles();

    if (variant === 'p2p') {
        selected = selectedP2pRadio.value;
        items = p2pradios;
        onChange = setP2pRadioButton;
    }

    return (
        <div className={styles.Container}>
            <FormControl component="fieldset">
                <RadioGroup aria-label="position" name="position" value={selected} onChange={onChange} column="true">
                    { items.map(({ value, label, color = null }, index) => {
                        return (
                            <FormControlLabel
                            key={index}
                            value={value}
                            control={color !== 'white' ? <Radio color="default" disableRipple />
                                : <WhiteRadio disableRipple/>}
                            label={label}
                            labelPlacement="end"
                            className={classes.label}
                            />
                        )
                    }) }
                </RadioGroup>
            </FormControl>
        </div>
    );
}

const mapStateToProps = state => {
    return ({
        radios: state.settings.radios,
        p2pradios: state.settings.p2pradios,
        selectedRadio: state.settings.selectedRadio,
        selectedP2pRadio: state.settings.selectedP2pRadio
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        setRadioButton: (e) => dispatch(setRadioButtonAction(e.target.value)),
        setP2pRadioButton: (e) => dispatch(setP2pRadioButtonAction(e.target.value))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(RadioButtonsGroup);
