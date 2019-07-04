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

export default function RadioButtonsGroup({ value, onChange, variants }) {
    // const [value, setValue] = React.useState("nothing");
    const classes = useStyles();

    function handleChange(event) {
        onChange(event.target.value);
    }

    return (
        <div className={styles.Container}>
            <FormControl component="fieldset">
                <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} column="true">
                    { variants.map(({ value, label }, index) => {
                        return (
                            <FormControlLabel
                            key={index}
                            value={value}
                            control={<Radio color="default" />}
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
