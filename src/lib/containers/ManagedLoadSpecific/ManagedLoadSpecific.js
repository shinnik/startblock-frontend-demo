import React from 'react';
import {DndList} from "../DndList/DndList";
import arrow from '../../components/Icon/icons/Priority.svg'

import styles from './ManagedLoadSpecific.module.scss'

export const ManagedLoadSpecific = () => {

    return (
        <div className={styles['Container']}>
            <DndList/>
            <img src={arrow} className={styles.Arrow}/>
            <div className={styles['LabelContainer']}>
                <div className={styles['text1']}>Нельзя отключать</div>
                <div className={styles['text2']}>Можно отключать</div>
            </div>
        </div>
    )
}
