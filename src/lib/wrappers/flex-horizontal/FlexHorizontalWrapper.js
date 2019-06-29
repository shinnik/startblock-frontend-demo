import React from 'react';
import styles from './FlexHorizontalWrapper.module.css';


function FlexHorizontalWrapper({children}) {
    return <div className={styles.FlexHorizontal}>
        {children}
    </div>
}


export default FlexHorizontalWrapper;
