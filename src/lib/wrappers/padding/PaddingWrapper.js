import React from 'react';
import styles from './PaddingWrapper.module.css';

function PaddingWrapper({children}) {
    return <div className={styles.PaddingWrapper}>
        {
          children
        }
    </div>
}

export default PaddingWrapper;
