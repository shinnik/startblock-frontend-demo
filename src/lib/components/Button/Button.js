import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

export const Button = ({ onClick, children, className, disabled, ...attrs }) => {

    const disabling = disabled ? 'disabled' : 'active';

    const classes = classNames(
        styles['btn'],
        styles[className],
        styles[disabling]
    );
    return (
        <div>
            <button
                onClick={onClick}
                className={classes}
                disabled={disabled}
                {...attrs}>
                {children}
            </button>
        </div>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
    children: 'Default button',
    className: '',
    disabled: false
}