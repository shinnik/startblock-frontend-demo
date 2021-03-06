import React from 'react';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch/Switch";
import { texts } from '../../constants/texts'
import styles from './ServiceBox.module.scss'

const StyledSwitch = withStyles({
    switchBase: {
        backgroundColor: 'transparent !important',
        '&$checked': {
            color: '#FFF',
        },
        '&$checked + $track': {
            backgroundColor: '#FFF',
            opacity: 0.25
        }
    },
    checked: {},
    track: { backgroundColor: 'rgba(34, 31, 31, 0.26)', opacity: 1 },
})(Switch);

export const ServiceBox = ({ variant, active, render = null, onToggle }) => {

    const boxClasses = classNames(
        {[styles[`box__${variant}--active`]]: active === true},
        {[styles[`box__${variant}--inactive`]]: active === false},
        styles[`box__${variant}`],
        styles['box']
    );

    const textBlockClasses = classNames(
        {[styles[`textbox--active`]]: active === true},
        {[styles[`textbox--inactive`]]: active === false},
        styles['textbox']
    )

    return (
        <>
            { variant &&
                <div className={boxClasses}>
                    <div className={ styles[`box__header`] }>
                        <StyledSwitch checked={ active }
                                      onChange={ () => onToggle(!active) }
                                      disableRipple/>
                        <Typography style={{ fontWeight: 500, color: '#FFF' }}
                                    variant="h5"
                                    component="h2"
                                    >
                            { texts[variant].header }
                        </Typography>
                    </div>
                    <div className={textBlockClasses}>
                        <Typography variant="body2">
                            { texts[variant][`text${active ? 'Active' : 'Inactive'}`]}
                        </Typography>
                    </div>
                    { variant === 'load' && active && render() }
                    { variant === 'p2p' && active && render() }
                </div>
             }
        </>
    )
}
