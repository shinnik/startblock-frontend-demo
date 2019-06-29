import React from 'react';
import FlexHorizontalWrapper from "../../wrappers/flex-horizontal/FlexHorizontalWrapper";
import MediumArrow from "../../components/BranchArrows/MediumArrow/MediumArrow";
import CellInfo from "../CellInfo/CellInfo";
import styles from './MultiArrow.module.scss';

function MultiArrow({arr, data}) {
    return <div>
        <FlexHorizontalWrapper>
            <div>
                {
                    arr.map(((value, index, array) => <MediumArrow key={index} direction={value} last={index === array.length-1} first={index === 0} /> ))
                }
            </div>
            <div className={styles.MediumDiv} />
            <div>
                <div className={styles.AdditionalDiv}/>
                {
                    data.map((value, index) => <CellInfo key={index} name={value.name} amount={value.amount} money={value.money}/>)
                }
            </div>
        </FlexHorizontalWrapper>
    </div>
}

export default MultiArrow;
