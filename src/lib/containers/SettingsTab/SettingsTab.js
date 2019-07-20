import React, {useContext} from "react";
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { NavLink } from 'react-router-dom';

import styles from './SettingsTab.module.scss';
import {Location} from "../../components/Header/Header";

const settingsTabRef = React.forwardRef(({ children, ...props }, ref) => {

    const iconClasses = classNames(
        "material-icons",
        styles['settings-tab-icon']
    );

    const { setPath } = useContext(Location);

    return (
        <div ref={ref} onClick={() => setPath('settings')} style={{ marginLeft: 'auto' }}>
            <NavLink to="settings" role="tab" {...props}>
                {children}
                <i className={iconClasses}>settings</i>
            </NavLink>
        </div>
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
        translateX: '1px',
        paddingRight: '8px'
    }
})(SettingsTab)
