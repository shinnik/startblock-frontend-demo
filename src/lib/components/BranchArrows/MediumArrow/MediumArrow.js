import React from 'react';
import Triangle from "./Triangle/Triangle";
import Border from "./Border/Border";
import styles from './MediumArrow.module.scss';


function MediumArrow({direction, last, first, active, ggrey}) {
    return <Border ggrey={ggrey} last={last} first={first} active={active}>
        <Triangle direction={direction} first={first} active={active} />
        {!ggrey ? (first ? <div className={styles.FirstExtraBorder}/> : (!last ? <div className={styles.ExtraBorder} /> : null)) : null}
    </Border>;
}


export default MediumArrow;
