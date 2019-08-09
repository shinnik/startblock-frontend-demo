import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import {config} from "../../loc/current/config";

export const p2pradios = [{
    value: '1',
    label: (
        <div style={{display: 'flex', flexDirection: 'column', color: 'white'}}>
            <Typography key='1' variant="body1">{config.settingsPage.services.service2.radios[0].label}</Typography>
            <Typography key='2' style={{ opacity: 0.54 }} variant="body2">{config.settingsPage.services.service2.radios[0].caption}</Typography>
        </div>
    ),
    color: 'white'
    },
    {
        value: '2',
        label: (
            <div style={{display: 'flex', flexDirection: 'column', color: 'white', marginBottom: '10px', marginTop: '10px'}}>
                <Typography key='1' variant="body1">{config.settingsPage.services.service2.radios[1].label}</Typography>
                <Typography key='2' style={{ opacity: 0.54 }} variant="body2">{config.settingsPage.services.service2.radios[1].caption}</Typography>
            </div>
        ),
        color: 'white'
    },
    {
        value: '3',
        label: (
            <div style={{display: 'flex', flexDirection: 'column', color: 'white'}}>
                <Typography key='1' variant="body1">{config.settingsPage.services.service2.radios[2].label}</Typography>
                <Typography key='2' style={{ opacity: 0.54 }} variant="body2">{config.settingsPage.services.service2.radios[2].caption}</Typography>
            </div>
        ),
        color: 'white'
    }]
