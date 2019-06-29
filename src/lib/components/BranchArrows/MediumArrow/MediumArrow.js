import React from 'react';
import styles from './MediumArrow.module.scss';


function MediumArrow({direction, last, first}) {
    return <div className={last ? styles.LastArrow : first ? styles.FirstArrow : styles.MediumArrow}>
        <div className={direction ? first ? styles.RightTriangle__first : styles.RightTriangle : styles.LeftTriangle}>
        </div>
    </div>;
}


export default MediumArrow;
