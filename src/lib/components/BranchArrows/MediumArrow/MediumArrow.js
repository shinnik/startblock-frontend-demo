import React from 'react';
import styles from './MediumArrow.module.scss';


function MediumArrow({direction, last}) {
    return <div className={last ? styles.LastArrow : styles.MediumArrow}>
        <div className={direction ? styles.RightTriangle : styles.LeftTriangle}>
        </div>
    </div>;
}


export default MediumArrow;
