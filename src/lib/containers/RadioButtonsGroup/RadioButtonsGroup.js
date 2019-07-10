import React from 'react';
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

export default function RadioButtonsGroup({ onChange, currentValue, radios }) {

    const classes = useStyles();
    
    return (
        <div className={styles.Container}>
            <FormControl component="fieldset">
                <RadioGroup aria-label="position" name="position" value={currentValue.toString()} onChange={(e) => onChange(e.target.value)} column="true">
                    { radios.map((radio, index) => {
                        return (
                            <FormControlLabel
                            key={index}
                            value={index.toString()}
                            control={radio.get('color') !== 'white' ? <Radio color="default" disableRipple />
                                : <WhiteRadio disableRipple/>}
                            label={radio.get('label')}
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
