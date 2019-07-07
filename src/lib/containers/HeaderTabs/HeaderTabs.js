import Tabs from "@material-ui/core/Tabs/Tabs";
import { withStyles } from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import { Location } from "../../components/Header/Header";
import variables from '../../constants/header.scss';
import { locsMap } from '../../constants/locations';
import NavigationTab from "../NavigationTab/NavigationTab";


const StyledTabs = withStyles(({ header }) => ({
    root: {
        width: 'calc(88vw - 32px)',
        ...header
    },
    indicator: {
        backgroundColor: variables.indicatorColor,
        height: variables.indicatorHeight
    }
}))(props => <Tabs {...props} />);

export const HeaderTabs = ({ specials, tabs }) => {

    const pathname = window.location.pathname;
    const [current, setCurrent] = useState(locsMap[Object.keys(locsMap).filter(key => pathname.includes(key))[0]] || 0);
    const { path }= useContext(Location);

    useEffect(() => {
        if (path) {
            setCurrent(locsMap[path])
        }
    }, [path]);

    return (
        <StyledTabs
            value={current}
            onChange={(event, value) => setCurrent(value)}>
            {tabs.map(({ label, path, id }) => <NavigationTab key={id} label={label} path={path} />)}
            {specials}
        </StyledTabs>
    )
}
