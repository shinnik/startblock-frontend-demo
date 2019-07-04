import React from 'react';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import styles from './RadioButtonsGroup.module.scss';

const useStyles = makeStyles(theme => ({
    label: {
        fontFamily: theme.typography.fontFamily,
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.44px',
    }
}))

export default function RadioButtonsGroup({ value, onChange }) {
    // const [value, setValue] = React.useState("nothing");
    const classes = useStyles();

    function handleChange(event) {
        onChange(event.target.value);
    }

    return (
        <div className={styles.Container}>
            <FormControl component="fieldset">
                <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} column="true">
                    <FormControlLabel
                        value="nothing"
                        control={<Radio color="default" />}
                        label="Ничего нет"
                        labelPlacement="end"
                        className={classes.label}
                    />
                    <FormControlLabel
                        value="generator"
                        control={<Radio color="default" />}
                        label="Бензогенератор"
                        labelPlacement="end"
                        className={classes.label}
                    />
                    <FormControlLabel
                        value="sun"
                        control={<Radio color="default" />}
                        label="Солнечная панель"
                        labelPlacement="end"
                        className={classes.label}
                    />
                    <FormControlLabel
                        value="acc"
                        control={<Radio color="default" />}
                        label="Аккумуляторная батарея"
                        labelPlacement="end"
                        className={classes.label}
                    />
                </RadioGroup>
            </FormControl>
        </div>
    );
}
