import React from "react";
import get from "lodash/get";

import DefaultFooter from "./DefaultFooter";
import HandleErrorModal from "../HandleErrorModal";
import { ThemeConfigurationConsumer } from "pulsetile-react-admin";

const FooterWithContext = ({ contextProps }) => {
    const isFooterAbsent = get(contextProps, 'themeCommonElements.isFooterAbsent', false);
    return (
        <React.Fragment>
            <HandleErrorModal />
            {
                isFooterAbsent ? null : <DefaultFooter />
            }
        </React.Fragment>
    );
};


const Footer = props => {
    return (
        <ThemeConfigurationConsumer>
        {
            contextProps => {
                return (
                    <FooterWithContext
                        contextProps={contextProps}
                        {...props}
                    />
                )
            }
        }
        </ThemeConfigurationConsumer>
    );
};

export default Footer;
