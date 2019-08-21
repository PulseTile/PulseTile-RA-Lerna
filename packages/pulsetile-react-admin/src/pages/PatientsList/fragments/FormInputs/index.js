import React from "react";

import { ThemeConfigurationConsumer } from "pulsetile-react-admin";
import FormInputsWithContext from "./FormInputs";

const FormInputs = props => {
    return (
        <ThemeConfigurationConsumer>
        {
            contextProps => {
                return (
                    <FormInputsWithContext
                        contextProps={contextProps}
                        {...props}
                    />
                )
            }
        }
        </ThemeConfigurationConsumer>
    )
};

export default FormInputs;