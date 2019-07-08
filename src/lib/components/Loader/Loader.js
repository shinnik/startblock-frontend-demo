import React from 'react';
import ReactDOM from 'react-dom';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

import styles from './Loader.module.scss';

export const Loader = () => {
    return ReactDOM.createPortal(
        <div className={styles['Loader']}>
            <CircularProgress />
        </div>,
        document.body
    )
};
