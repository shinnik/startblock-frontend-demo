import React from "react";
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { Link } from 'react-router-dom';

import styles from './SettingsTab.module.scss';

const settingsTabRef = React.forwardRef(({ children, ...props }, ref) => {

    const iconClasses = classNames(
        "material-icons",
        styles['settings-tab-icon']
    );

    return (
        <Link to="settings" role="tab" {...props} ref={ref}>
            {children}
            <i className={iconClasses}>settings</i>
        </Link>
    )
});

const SettingsTab = ({ label, ...props }) => {
    return (
        <Tab label={label} {...props} component={settingsTabRef} />
    )
};

export default withStyles({
    root: {
        opacity: '1 !important',
        marginLeft: 'auto',
        minWidth: 'auto !important',
        fontSize: '14px !important',
        translateX: '1px'
    }
})(SettingsTab)
