import React from "react";
import get from "lodash/get";

import { ThemeConfigurationConsumer } from "pulsetile-react-admin";
import PatientSummaryPage from "./pageWithContext";

const PatientSummary = props => {
    return (
        <ThemeConfigurationConsumer>
        {
            contextProps => {
                const isRollViewDefault = get(contextProps, 'themeCommonElements.hasPatientSummaryRoll', false);
                const pluginsList = get(contextProps, 'pluginsList', []);
                return (
                    <PatientSummaryPage
                        contextProps={contextProps}
                        isRollViewDefault={isRollViewDefault}
                        pluginsList={pluginsList}
                        {...props}
                    />
                )
            }
        }
        </ThemeConfigurationConsumer>
    )
};

export default PatientSummary;