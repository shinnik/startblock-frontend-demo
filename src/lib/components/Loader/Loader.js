import React from 'react';
import ReactDOM from 'react-dom';
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";

import styles from './Loader.module.scss';

export const Loader = () => {
    return ReactDOM.createPortal(
        <div className={styles['Loader']}>
            <LinearProgress />
        </div>,
        document.body
    )
};
