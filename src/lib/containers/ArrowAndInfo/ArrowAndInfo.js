import React from 'react';
import styles from './ArrowAndInfo.module.scss';
import PaddingWrapper from "../../wrappers/padding/PaddingWrapper";
import CellInfo from "../CellInfo/CellInfo";


function ArrowAndInfo({direction}) {
    return <div className={styles.ArrowAndInfo}>
        <PaddingWrapper>
            <CellInfo amount={1} />
        </PaddingWrapper>
        <div className={direction ? styles.TriangleUp : styles.TriangleDown} />
    </div>
}

export default ArrowAndInfo;
