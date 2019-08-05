import React from 'react';
import classes from './Hider.module.scss'

function Hider({children, predicate}) {
    return (
        <div className={predicate ? classes.Hider__active : classes.Hider}>
            {children}
        </div>
    );
}

export default Hider;
