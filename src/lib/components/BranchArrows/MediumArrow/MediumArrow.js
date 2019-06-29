import React from 'react';
import styles from './MediumArrow.module.scss';


function MediumArrow({direction}) {
    console.log(direction);
    if (direction)
        return <div className={styles.MediumArrowRight}>

        </div>;
    else
        return <div className={styles.MediumArrowLeft}>

        </div>
}


export default MediumArrow;
