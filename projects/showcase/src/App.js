import React, { Component } from 'react';

import { App } from "pulsetile-react-admin";
import * as themeConfiguration from "./custom/themeConfig";
import CustomLayout from "./custom/Layout";

class Core extends Component {
  render() {
    return (
        <App
          themeConfiguration={themeConfiguration}
          CustomLayout={CustomLayout}
        />
    )
  }
}

export default Core;
