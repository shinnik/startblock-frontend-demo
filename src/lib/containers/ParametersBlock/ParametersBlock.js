import React from 'react';
import { InputPair } from "../../containers/InputPair/InputPair";
import { capacityInput, costInput, powerInput } from "../../containers/InputPair/inputTypes";
import Typography from "@material-ui/core/Typography/Typography";


export const ParametersBlock = ({ variant }) => {

    let first; let second;

    const mapVariantToInputTypes = variant => {
        if (variant === 'generator' || variant === 'sun') {
            first = powerInput;
            second = costInput;
        }
        if (variant === 'acc') {
            first = powerInput;
            second = capacityInput;
        }
    };

    mapVariantToInputTypes(variant);

    return (
        <>
            { first && second && (
                <>
                    <Typography style={{fontWeight: 600}}
                                variant="h5"
                                component="h2"
                                gutterBottom>
                        Параметры бензогенератора
                    </Typography>
                    <InputPair first={first ? first : {}}
                               second={second ? second : {}}/>
                </>
                ) }

        </>
    )
}
