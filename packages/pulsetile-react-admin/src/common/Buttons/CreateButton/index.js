import React from "react";

import { ThemeConfigurationConsumer } from "pulsetile-react-admin";
import CreateButtonWithContext from "./CreateButton";

const DatagridRow = props => {
    return (
        <ThemeConfigurationConsumer>
        {
            contextProps => {
                return (
                    <CreateButtonWithContext
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