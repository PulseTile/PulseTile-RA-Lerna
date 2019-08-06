import React from "react";

import { ThemeConfigurationConsumer } from "pulsetile-react-admin";
import ListTemplateWithContent from "./ListTemplate";

const ListTemplate = props => {
    return (
        <ThemeConfigurationConsumer>
        {
            contextProps => {
                return (
                    <ListTemplateWithContent
                        contextProps={contextProps}
                        {...props}
                    />
                )
            }
        }
        </ThemeConfigurationConsumer>
    );
};

export default ListTemplate;