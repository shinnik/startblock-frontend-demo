import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import styles from './RadioButtonsGroup.module.scss';

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

export default function RadioButtonsGroup({ value, onChange, variants }) {

    const classes = useStyles();
    const [val, setVal] = React.useState("nothing");

    if (!value || !onChange) {
        // use local state if you do not want
        // external intervention
        value = val;
        onChange = setVal;
    }

    function handleChange(event) {
        onChange(event.target.value);
    }

    return (
        <div className={styles.Container}>
            <FormControl component="fieldset">
                <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} column="true">
                    { variants.map(({ value, label, color = null }, index) => {
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
