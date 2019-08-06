import React from "react";

import { ThemeConfigurationConsumer } from "pulsetile-react-admin";
import VitalsChartWithContext from "./VitalsChart";

const VitalsChart = props => {
    return (
        <ThemeConfigurationConsumer>
        {
            contextProps => {
                return (
                    <VitalsChartWithContext
                        contextProps={contextProps}
                        {...props}
                    />
                )
            }
        }
        </ThemeConfigurationConsumer>
    )
};

export default VitalsChart;
