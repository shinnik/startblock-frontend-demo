import Tabs from "@material-ui/core/Tabs/Tabs";
import { withStyles } from "@material-ui/core";
import React, { useState } from "react";
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
    console.log(pathname);
    const mapPathToId = (currentPath) => {
        const currentTab = tabs.filter(tab => tab.path === currentPath.split('/')[1])[0];
        if (currentTab) {
            const currentId = currentTab.id;
            return currentId;
        } else return tabs.length
    };
    const [current, setCurrent] = useState(mapPathToId(pathname));

    return (
        <StyledTabs
            value={current}
            onChange={(event, value) => setCurrent(value)}>
            {tabs.map(({ label, path, id }) => <NavigationTab key={id} label={label} path={path} />)}
            {specials}
        </StyledTabs>
    )
}
