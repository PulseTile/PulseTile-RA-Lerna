import React, { Component } from 'react';

import {App, PatientsListPage } from "pulsetile-react-admin";
import * as themeConfiguration from "./custom/themeConfig";
import CustomLayout from "./custom/Layout";

class Core extends Component {
  render() {
    return (
        <App
          themeConfiguration={themeConfiguration}
          CustomLayout={CustomLayout}
          CustomHomepage={PatientsListPage}
      />
    )
  }
}

export default Core;
