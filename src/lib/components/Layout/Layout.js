import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../components/Header/Header';

import styles from './Layout.module.scss';



export const Layout = ({ children, ...rest }) => {
    return (
        <div {...rest}>
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
