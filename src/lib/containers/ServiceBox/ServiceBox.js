import React, { useState } from 'react';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch/Switch";

import styles from './ServiceBox.module.scss';
import {DndList} from "../DndList/DndList";
import RadioButtonsGroup from '../RadioButtonsGroup/RadioButtonsGroup';

const radios = [{
    value: '1',
    label: (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Typography variant="body2">TODO</Typography>
            <Typography variant="body1">написать пояснение</Typography>
        </div>
    )
},
{
    value: '2',
    label: (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Typography variant="body2">TODO</Typography>
            <Typography variant="body1">написать пояснение</Typography>
        </div>
    )
}]

const texts = {
    load: {
        header: 'Управляемая нагрузка',
        textActive: 'Чтобы сэкономить, умные розетки будут выключаться при\n' +
            'подорожании энергии. Перетащите наверх списка те, что\n должны отключаться реже:',
        textInactive: 'Чтобы сэкономить, умные розетки будут выключаться при подорожании энергии.'
    },
    p2p: {
        header: 'P2P торговля энергией',
        textActive: 'TODO\nНаписать пояснение',
        textInactive: 'TODO\nНаписать пояснение'
    },
    balance: {
        header: 'Баланс спроса и предложения',
        textActive: 'TODO\nНаписать пояснение',
        textInactive: 'TODO\nНаписать пояснение'
    }
};

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

export const ServiceBox = ({ variant }) => {

    const [checked, setChecked] = useState(true);
    const boxClasses = classNames(
        {[styles[`box__${variant}--active`]]: checked === true},
        {[styles[`box__${variant}--inactive`]]: checked === false},
        styles[`box__${variant}`],
        styles['box']
    );

    const textBlockClasses = classNames(
        {[styles[`textbox--active`]]: checked === true},
        {[styles[`textbox--inactive`]]: checked === false},
        styles['textbox']
    )

    return (
        <>
            { variant &&
                <div className={boxClasses}>
                    <div className={ styles[`box__header`] }>
                        <StyledSwitch checked={ checked }
                                      onChange={ () => setChecked(!checked) }
                                      disableRipple/>
                        <Typography style={{ fontWeight: 500, color: '#FFF' }}
                                    variant="h5"
                                    component="h2"
                                    gutterBottom
                                    >
                            { texts[variant].header }
                        </Typography>
                    </div>
                    <div className={textBlockClasses}>
                        <Typography variant="body2">
                            { texts[variant][`text${checked ? 'Active' : 'Inactive'}`]}
                        </Typography>
                    </div>
                    { variant === 'load' && checked && <DndList/> }
                    { variant === 'p2p' && checked && <RadioButtonsGroup variants={radios} /> }
                </div>
             }
        </>
    )
}
