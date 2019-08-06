import React from "react";

import { ThemeConfigurationConsumer } from "pulsetile-react-admin";
import TableHeader from "./TableHeader";

const TableHeaderWithContext = props => {
    return (
        <ThemeConfigurationConsumer>
        {
            contextProps => {
                return (
                    <TableHeader contextProps={contextProps} {...props} />
                )
            }
        }
        </ThemeConfigurationConsumer>
    );
};

export default TableHeaderWithContext;