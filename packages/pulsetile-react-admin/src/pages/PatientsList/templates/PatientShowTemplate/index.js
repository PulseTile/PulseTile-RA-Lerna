import React from "react";

import { ThemeConfigurationConsumer } from "pulsetile-react-admin";
import PatientShowTemplate from "./PatientShowTemplate";

const PatientShow = props => {
    return (
        <ThemeConfigurationConsumer>
        {
            contextProps => {
                return (
                    <PatientShowTemplate
                        contextProps={contextProps}
                        {...props}
                    />
                )
            }
        }
        </ThemeConfigurationConsumer>
    )
};

export default PatientShow;