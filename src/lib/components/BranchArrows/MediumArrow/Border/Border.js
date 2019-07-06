import React from 'react';
import styles from "../MediumArrow.module.scss";


function Border({last, first, active, children, ggrey}) {
    if (active) {
        if (first)
            return <div className={styles.FirstBorder}>{children}</div>;
        else if (last)
            return <div className={styles.LastBorder}>{children}</div>;
        else
            return <div className={styles.MediumBorder}>{children}</div>;
    }
    else {
        if (ggrey)
            if (first)
                return <div className={styles.FirstBorder__ggrey}>{children}</div>;
            else if (last)
                return <div className={styles.LastBorder__ggrey}>{children}</div>;
            else
                return <div className={styles.MediumBorder__ggrey}>{children}</div>;
        else
            if (first)
                return <div className={styles.FirstBorder__grey}>{children}</div>;
            else if (last)
                return <div className={styles.LastBorder__grey}>{children}</div>;
            else
                return <div className={styles.MediumBorder__grey}>{children}</div>;
    }
}

export default Border;
