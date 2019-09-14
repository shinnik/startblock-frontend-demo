import React from 'react';
import Triangle from "./Triangle/Triangle";
import Border from "./Border/Border";
import ExtraBorder from "./ExtraBorder";


function MediumArrow({direction, last, first, active, ggrey}) {
    return <Border ggrey={ggrey} last={last} first={first} active={active}>
        <Triangle direction={direction} first={first} active={active} />
        <ExtraBorder active={active} first={first} last={last} ggrey={ggrey} />
    </Border>;
}


export default MediumArrow;
