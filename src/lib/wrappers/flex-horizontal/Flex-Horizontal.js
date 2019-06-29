import React from 'react';
import styles from './FlexHorizontal.module.css';


function FlexHorizontal({children}) {
    return <div className={styles.FlexHorizontal}>
        {children}
    </div>
}


export default FlexHorizontal;
