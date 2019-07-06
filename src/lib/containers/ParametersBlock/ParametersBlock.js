import React from 'react';
import { InputPair } from "../../containers/InputPair/InputPair";
import { capacityInput, costInput, powerInput } from "../../containers/InputPair/inputTypes";
import Typography from "@material-ui/core/Typography/Typography";

export const ParametersBlock = (props) => {

    let first;
    let second;

    const mapVariantToInputTypes = ({ value }) => {
        if (value === 'generator' || value === 'sun') {
            first = powerInput;
            second = costInput;
        }
        if (value === 'acc') {
            first = powerInput;
            second = capacityInput;
        }
    };

    mapVariantToInputTypes(props.variant);

    return (
        <>
            {first && second && (
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
            )}

        </>
    )
}
