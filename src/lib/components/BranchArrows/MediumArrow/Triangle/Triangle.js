import React from 'react';
import styles from "../MediumArrow.module.scss";


function Triangle({direction, first, active}) {
    if (direction) {
        if (first) {
            if (active)
                return <div className={styles.RightTriangle__first} />;
            else
                return <div className={styles.RightTriangle__first__grey} />
        }
        else
            if (active)
                return <div className={styles.RightTriangle} />;
            else
                return <div className={styles.RightTriangle__grey} />
    }
    else {
        if (first) {
            if (active)
                return <div className={styles.LeftTriangle__first} />;
            else
                return <div className={styles.LeftTriangle__first__grey} />;
        }
        else {
            if (active)
                return <div className={styles.LeftTriangle} />;
            else
                return <div className={styles.LeftTriangle__grey} />;
        }
    }
}

export default Triangle;
