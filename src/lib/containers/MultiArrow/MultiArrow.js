import React from 'react';
import FlexHorizontalWrapper from "../../wrappers/flex-horizontal/FlexHorizontalWrapper";
import MediumArrow from "../../components/BranchArrows/MediumArrow/MediumArrow";
import CellInfo from "../CellInfo/CellInfo";
import styles from './MultiArrow.module.scss';

function MultiArrow({data}) {
    return <div>
        <FlexHorizontalWrapper>
            <div>
                {
                    data.map(((value, index, array) => <MediumArrow ggrey={!array.slice(index).reduce((acc, curr) => acc || curr.active, false)} active={value.active} key={index} direction={value.output} last={index === array.length-1} first={index === 0} /> ))
                }
            </div>
            <div className={styles.MediumDiv} />
            <div>
                <div className={styles.AdditionalDiv}/>
                {
                    data.map((value, index) => <CellInfo key={index} name={value.name} amount={value.amount} money={value.money} {...value}/>)
                }
            </div>
        </FlexHorizontalWrapper>
    </div>
}

export default MultiArrow;
