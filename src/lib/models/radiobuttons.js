import React from "react";
import Typography from "@material-ui/core/Typography/Typography";

export const p2pradios = [{
    value: '1',
    label: (
        <div style={{display: 'flex', flexDirection: 'column', color: 'white'}}>
            <Typography variant="body1">Максимальный доход</Typography>
            <Typography style={{ opacity: 0.54 }} variant="body2">TODO описание</Typography>
        </div>
    ),
    color: 'white'
},
    {
        value: '2',
        label: (
            <div style={{display: 'flex', flexDirection: 'column', color: 'white', marginBottom: '10px', marginTop: '20px'}}>
                <Typography variant="body1">Минимальный риск отклонения</Typography>
                <Typography style={{ opacity: 0.54 }} variant="body2">Держать аккумулятор заряженным</Typography>
            </div>
        ),
        color: 'white'
    }]
