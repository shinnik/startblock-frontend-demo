import React from 'react';
import { InputPair } from "../../containers/InputPair/InputPair";
import { capacityInput, costInput, powerInput } from "../../containers/InputPair/inputTypes";
import Typography from "@material-ui/core/Typography/Typography";

export const ParametersBlock = ({ onTyping, inputs }) => {
    if (inputs) console.log(inputs.get('0'));
    return (
        <>
            {inputs && (
                <>
                    <Typography style={{fontWeight: 600}}
                                variant="h5"
                                component="h2"
                                gutterBottom>
                        Параметры бензогенератора
                    </Typography>
                    <InputPair onTyping={onTyping} first={inputs.get('0')}
                               second={inputs.get('1')}/>
                </>
            )}

        </>
    )
}
