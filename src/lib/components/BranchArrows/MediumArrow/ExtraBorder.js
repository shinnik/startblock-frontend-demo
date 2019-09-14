import React from 'react';
import styles from './MediumArrow.module.scss';

/**
 * @return {null}
 */
function ExtraBorder({last, first, active, ggrey}) {
    if (first)
        if (!last)
            if (!active && !ggrey)
                return <div className={styles.FirstExtraBorder} />;
    if (!active && !ggrey)
        return  <div className={styles.ExtraBorder} />;
    return null;
}

export default ExtraBorder;
