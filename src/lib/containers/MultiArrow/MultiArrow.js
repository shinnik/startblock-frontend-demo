import React from 'react';
import FlexHorizontal from "../../wrappers/flex-horizontal/Flex-Horizontal";
import MediumArrow from "../../components/BranchArrows/MediumArrow/MediumArrow";
import CellInfo from "../CellInfo/CellInfo";
import styles from './MultiArrow.module.scss';


const arr = [true, true, false, false, true];
const data = [
    {
        name: 'Alpha',
        amount: 52,
        money: 5
    },
    {
        name: 'Beta',
        amount: 2,
        money: 1
    },
    {
        name: 'Gamma',
        amount: 512,
        money: 59
    },
    {
        name: 'Gamma',
        amount: 512,
        money: 59
    },
    {
        name: 'Gamma',
        amount: 512,
        money: 59
    },
];

function MultiArrow() {
    return <div>
        asjdfgkjasdgfjasgdfasgdfhjsgdfagsfkhasgfkjashgfhjasgdfkhasdgfkjhasdgfhj
        <FlexHorizontal>
            <div>
                {
                    arr.map(((value, index, array) => <MediumArrow direction={value} last={index === array.length-1} /> ))
                }
            </div>
            <div className={styles.MediumDiv} />
            <div>
                <div className={styles.AdditionalDiv}/>
                {
                    data.map(value => <CellInfo name={value.name} amount={value.amount} money={value.money}/>)
                }
            </div>
        </FlexHorizontal>
    </div>
}

export default MultiArrow;
