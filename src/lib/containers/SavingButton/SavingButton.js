import React, { useRef } from 'react';
import classNames from 'classnames';
import { saveSettings } from "../../../store/actions/savingButton";
import { connect } from 'react-redux';
import styles from "./SavingButton.module.scss";

const SavingButton = ({ onClick, isLoading, isSuccessful, isFailed }) => {
    const handleClick = () => {
        onClick();
    };
    console.log(isLoading, isSuccessful, isFailed);
    const classes = classNames(
        styles['saving-button__button'],
        {   [styles['saving-button__button--initial']]: !isLoading && !isSuccessful && !isFailed,
            [styles['saving-button__button--loading']]: isLoading,
            [styles['saving-button__button--success']]: isSuccessful,
            [styles['saving-button__button--failed']]: isFailed
        }
    );
    return (
        <div onClick={handleClick} className={classes}></div>
    )
};

const mapStateToProps = state => {
    return ({
        isLoading: state.sb.loading,
        isSuccessful: state.sb.success,
        isFailed: state.sb.failed
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        onClick: () => dispatch(saveSettings())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SavingButton);
