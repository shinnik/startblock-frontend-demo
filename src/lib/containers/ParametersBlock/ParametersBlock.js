import React from 'react';
import { InputPair } from "../../containers/InputPair/InputPair";
import { capacityInput, costInput, powerInput } from "../../containers/InputPair/inputTypes";
import Typography from "@material-ui/core/Typography/Typography";

export const ParametersBlock = ({ onTyping, current }) => {
    return (
        <>
            {current.get('inputTypes') && (
                <>
                    <Typography style={{fontWeight: 600}}
                                variant="h5"
                                component="h2"
                                gutterBottom>
                        {current.get('header')}
                    </Typography>
                    <InputPair onTyping={onTyping} first={current.getIn(['inputTypes', '0'])}
                               second={current.getIn(['inputTypes', '1'])}/>
                </>
            )}

        </>
    )
}
