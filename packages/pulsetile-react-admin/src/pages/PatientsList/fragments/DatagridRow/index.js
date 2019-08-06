import React from "react";

import { ThemeConfigurationConsumer } from "pulsetile-react-admin";
import DatagridRowWithContext from "./DatagridRow";

const DatagridRow = props => {
    return (
        <ThemeConfigurationConsumer>
        {
            contextProps => {
                return (
                    <DatagridRowWithContext
                        contextProps={contextProps}
                        {...props}
                    />
                )
            }
        }
        </ThemeConfigurationConsumer>
    )
};

export default DatagridRow;