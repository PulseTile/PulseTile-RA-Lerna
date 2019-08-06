import React from "react";

import { ThemeConfigurationConsumer } from "pulsetile-react-admin";
import PatientListPage from "./pageWithContext";

const PatientList = props => {
    return (
        <ThemeConfigurationConsumer>
        {
            contextProps => {
                return (
                    <PatientListPage
                        contextProps={contextProps}
                        {...props}
                    />
                )
            }
        }
        </ThemeConfigurationConsumer>
    )
};

export default PatientList;