import React, { useState } from 'react';
import SettingsTab from '../../containers/SettingsTab/SettingsTab';
import {HeaderTabs} from "../../containers/HeaderTabs/HeaderTabs";
import { Icon } from '../../components/Icon/Icon';
import { tabs } from '../../constants/navigations';

import styles from './Header.module.scss';
import FlexHorizontalWrapper from "../../wrappers/flex-horizontal/FlexHorizontalWrapper";

// location is here to let material-ui's
// Tabs component know that somewhere
// current location was changed
export const Location = React.createContext({
    path: null,
    setPath: () => {}
});

export const Header = (props) => {

    const [ path, setPath ] = useState(null);

    return (
        <div className={styles.container}>
            <Location.Provider value={{ path, setPath }}>
                <FlexHorizontalWrapper>
                    <Icon/>
                    <HeaderTabs tabs={tabs} specials={<SettingsTab label='Настройки'/>}/>
                </FlexHorizontalWrapper>
            </Location.Provider>
        </div>
    )
};
