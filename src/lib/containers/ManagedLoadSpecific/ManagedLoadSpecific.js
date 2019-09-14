import React from 'react';
import {DndList} from "../DndList/DndList";
import arrow from '../../components/Icon/icons/Priority.svg'

import styles from './ManagedLoadSpecific.module.scss'
import {config} from "../../../loc/current/config";

export const ManagedLoadSpecific = ({ items, onReorder, onChange }) => {

    return (
        <div className={styles['Container']}>
            <DndList items={items}
                     onReorder={onReorder}
                     onChange={onChange}/>
            <img alt={''} src={arrow} className={styles.Arrow}/>
            <div className={styles['LabelContainer']}>
                <div className={styles['text1']}>{config.settingsPage.services.service1.arrowTop.label}</div>
                <div className={styles['text2']}>{config.settingsPage.services.service1.arrowBottom.label}</div>
            </div>
        </div>
    )
}
