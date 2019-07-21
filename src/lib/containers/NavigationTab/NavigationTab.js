import React, { useContext } from 'react';
import Tab from "@material-ui/core/Tab/Tab";
import { withStyles } from "@material-ui/styles";
import {Link, NavLink} from "react-router-dom";
import { Location } from "../../components/Header/Header";

const navigationTabRef = React.forwardRef(({ children, path, ...props }, ref) => {

    const { setPath } = useContext(Location);

    return (
        <div ref={ref} onClick={() => setPath(path)}>
            <NavLink to={path} role="tab" {...props}>
                {children}
            </NavLink>
        </div>
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
