import React from 'react';
import styles from './MediumArrow.module.scss';


function MediumArrow({direction}) {
    if (direction)
        return <div className={styles.MediumArrowRight}>
            <div className={styles.RightTriangle}>

            </div>
        </div>;
    else
        return <div className={styles.MediumArrowLeft}>
            <div className={styles.LeftTriangle}>

            </div>
        </div>
}


export default MediumArrow;
