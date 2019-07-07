import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../components/Header/Header';

import styles from './Layout.module.scss';



export const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            <div className={styles.Layout}>
                { children }
            </div>
        </div>
    )
};

Layout.propTypes = {
    children: PropTypes.node
};

Layout.defaultProps = {
    children: ''
};
