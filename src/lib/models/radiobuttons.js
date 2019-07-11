import React from "react";
import Typography from "@material-ui/core/Typography/Typography";

export const p2pradios = [{
    value: '1',
    label: (
        <div style={{display: 'flex', flexDirection: 'column', color: 'white'}}>
            <Typography key='1' variant="body1">Максимальный доход</Typography>
            <Typography key='2' style={{ opacity: 0.54 }} variant="body2">TODO описание</Typography>
        </div>
    ),
    color: 'white'
},
    {
        value: '2',
        label: (
            <div style={{display: 'flex', flexDirection: 'column', color: 'white', marginBottom: '10px', marginTop: '20px'}}>
                <Typography key='1' variant="body1">Минимальный риск отклонения</Typography>
                <Typography key='2' style={{ opacity: 0.54 }} variant="body2">Держать аккумулятор заряженным</Typography>
            </div>
        ),
        color: 'white'
    }]
