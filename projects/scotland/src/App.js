import React, { Component } from 'react';

import {App, PatientsListPage } from "pulsetile-react-admin";
import * as themeConfiguration from "./custom/themeConfig";
import CustomLayout from "./custom/Layout";

import customDataProvider from "./dataProvider/dataProvider";

class Core extends Component {
  render() {
    return (
        <App
          themeConfiguration={themeConfiguration}
          ProjectDataProvider={customDataProvider}
          CustomLayout={CustomLayout}
          CustomHomepage={PatientsListPage}
      />
    )
  }
}

export default Core;
