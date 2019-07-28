import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import { makeStyles } from '@material-ui/core/styles';

import styles from './InputPair.module.scss';
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";

const useStyles = makeStyles(theme => ({
    name: {
        marginRight: '32px',
        width: '192px',
        fontFamily: theme.typography.fontFamily,
        outlineColor: '#0099DC'
    },
    ip: {
        width: '128px',
        fontFamily: theme.typography.fontFamily,
        outlineColor: '#0099DC'
    },
    power: {
        marginRight: '32px',
        width: '128px'
    },
    cost: {
        width: '256px'
    },
    cap: {
        width: '160px'
    }
}))

export const InputPair = ({ first, second, onTyping }) => {
    const classes = useStyles();
    return (
        <form>
            { <TextField
                value={first.get('value')}
                InputLabelProps={{
                    shrink: true,
                }}
                margin='normal'
                variant='outlined'
                label={first.get('label')}
                onInput={(event) => onTyping('0', event.target.value)}
                className={classes[first.get('id')]}
                InputProps={{classes: { root: styles['textfield-input-custom'] }, endAdornment: <InputAdornment position="end">{first.get('units')}</InputAdornment>}}
            /> }
            { <TextField
                value={second.get('value')}
                InputLabelProps={{
                    shrink: true,
                }}
                label={second.get('label')}
                margin='normal'
                variant='outlined'
                onChange={(event) => onTyping('1', event.target.value)}
                className={classes[second.get('id')]}
                InputProps={{ classes: { input: styles[second.get('id')] }, endAdornment: <InputAdornment position="end">{second.get('units')}</InputAdornment>}}
            /> }

        </form>
    )
}
