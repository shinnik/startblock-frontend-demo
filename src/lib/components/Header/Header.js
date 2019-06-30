import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab';

import styles from './Header.module.scss';

export const Header = (props) => {

    const [current, setCurrent] = useState(0);
    const tabs = ['Текущие данные', 'За месяц', 'Настройки'];

    return (
        <div className={styles.container}>
            <Tabs
                value={current}
                onChange={(event, value) => setCurrent(value)}>
                { tabs.map(tab => <Tab label={tab} component={() => <div></div>}/>) }
            </Tabs>
        </div>
    )
};
