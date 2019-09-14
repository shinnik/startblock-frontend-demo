import React from 'react';
import styles from './FlexVerticalWrapper.module.css';


function FlexVerticalWrapper({children}) {
    return <div className={styles.FlexHorizontal}>
        {children}
    </div>
}


export default FlexVerticalWrapper;
