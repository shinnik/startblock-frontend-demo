import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../components/Header/Header'

export const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            { children }
        </div>
    )
};

Layout.propTypes = {
    children: PropTypes.node
};

Layout.defaultProps = {
    children: ''
};
