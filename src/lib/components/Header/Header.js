import React, { useState, useEffect } from 'react';
import SettingsTab from '../../containers/SettingsTab/SettingsTab';
import {HeaderTabs} from "../../containers/HeaderTabs/HeaderTabs";
import { Icon } from '../../components/Icon/Icon';
import { tabs } from '../../constants/navigations';

import styles from './Header.module.scss';
import SavingButton from "../../containers/SavingButton/SavingButton";

// location is here to let material-ui's
// Tabs component know that somewhere
// current location was changed
export const Location = React.createContext({
    path: null,
    setPath: () => {}
});

export const Header = (props) => {

    const [ path, setPath ] = useState(null);
    useEffect(() => {
        // little hack for fixing of material-ui's bug:
        // https://github.com/mui-org/material-ui/issues/9337
        setImmediate(() => window.dispatchEvent(new CustomEvent('resize')));
    }, []);
    return (
        <div className={styles['header__outer-container']}>
            <div className={styles['header__inner-container']}>
                <Location.Provider value={{ path, setPath }}>
                    <Icon/>
                    <HeaderTabs tabs={tabs} specials={<SettingsTab label='Настройки'/>}/>
                    { path === 'settings' && <SavingButton/> }
                </Location.Provider>
            </div>
        </div>
    )
};
