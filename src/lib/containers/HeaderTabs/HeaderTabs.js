import Tabs from "@material-ui/core/Tabs/Tabs";
import { withStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import NavigationTab from "../NavigationTab/NavigationTab";

import variables from '../../constants/header.scss';

const StyledTabs = withStyles(({ header }) => ({
    root: {
        width: 'calc(88% - 32px)',
        ...header
    },
    indicator: {
        backgroundColor: variables.indicatorColor,
        height: variables.indicatorHeight
    }
}))(props => <Tabs {...props} />);

export const HeaderTabs = ({ specials, tabs }) => {

    const pathname = window.location.pathname;
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        tabs.forEach(tab => {
            if (pathname.includes(tab.path)) {
                setCurrent(tab.id)
            } else if (pathname.includes('settings')) {
                setCurrent(2);
            } else setCurrent(0);
        }, 0);
    }, []);

    return (
        <StyledTabs
            value={current}
            onChange={(event, value) => setCurrent(value)}>
            {tabs.map(({ label, path, id }) => <NavigationTab key={id} label={label} path={path} />)}
            {specials}
        </StyledTabs>
    )
}
