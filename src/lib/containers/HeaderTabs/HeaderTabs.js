import Tabs from "@material-ui/core/Tabs/Tabs";
import {withStyles} from "@material-ui/core";
import React, {useState} from "react";
import NavigationTab from "../NavigationTab/NavigationTab";

import variables from '../../constants/header.scss';

const StyledTabs = withStyles(({ header }) => ({
    root: {
        width: '100%',
        ...header
    },
    indicator: {
        backgroundColor: variables.indicatorColor,
        height: variables.indicatorHeight
    }
}))(props => <Tabs { ...props }/>);

export const HeaderTabs = ({ specials, tabs }) => {

    const [current, setCurrent] = useState(0);

    return (
        <StyledTabs
            value={current}
            onChange={(event, value) => setCurrent(value)}>
            { tabs.map(({ label, path }) => <NavigationTab label={label} path={path}/>) }
            { specials }
        </StyledTabs>
    )
}
