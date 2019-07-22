import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Location } from '../../components/Header/Header';
import I from './icons/I.svg';
import D from './icons/Triangle.svg';
import E from './icons/E.svg';
import A from './icons/A.svg';

import styles from './Icon.module.scss';

export const Icon = ({ className }) => {

    const logos = [I, D, E, A];
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) {
            setClicked(false)
        }
    }, [clicked]);

    const stringArr = varObj => Object.keys(varObj);
    return (
        <Location.Consumer>
            {({ setPath }) =>
                <div onClick={() => {setClicked(true); setPath('current')}}
                     className={
                         className
                        ? className
                        : styles.LogoContainer }>
                    { clicked && <Redirect to='current'/> }
                    { logos.map((logo, index) => <img key={index} className={styles[stringArr({ I, D, E, A })[index]]} src={logo}/>) }
                </div>}
        </Location.Consumer>
    )
}
