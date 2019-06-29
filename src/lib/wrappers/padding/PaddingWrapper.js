import React from 'react';
import styles from './PaddingWrapper.module.css';

function PaddingWrapper({children, ...attrs}) {
    return <div {...attrs} className={styles.PaddingWrapper}>
        {
          children
        }
    </div>
}

export default PaddingWrapper;
