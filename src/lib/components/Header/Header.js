import React from 'react';
import SettingsTab from '../../containers/SettingsTab/SettingsTab';
import {HeaderTabs} from "../../containers/HeaderTabs/HeaderTabs";
import { Icon } from '../../components/Icon/Icon';
import { tabs } from '../../constants/navigations';

import styles from './Header.module.scss';



export const Header = (props) => {

    return (
        <div className={styles.container}>
            <Icon/>
            <HeaderTabs tabs={tabs} specials={<SettingsTab label='Настройки'/>}/>
        </div>
    )
};
