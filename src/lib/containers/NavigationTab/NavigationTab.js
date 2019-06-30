import React from 'react';
import Tab from "@material-ui/core/Tab/Tab";
import { withStyles } from "@material-ui/styles";
import {Link} from "react-router-dom";

const navigationTabRef = React.forwardRef(({ children, path, ...props }, ref) => {

    return (
        <Link to={path} role="tab" {...props} ref={ref}>
            {children}
        </Link>
    )
});

const NavigationTab = ({ label, path, ...props }) => {
    return (
        <Tab label={label} path={path} {...props} component={navigationTabRef} />
    )
}

export default withStyles(({ header }) => ({
    root: {
        opacity: '1 !important',
        // override media font-size and minWidth
        fontSize: header.fontSize,
        minWidth: 'auto'
    }
}))(NavigationTab);
