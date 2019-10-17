import React, { Component } from 'react';

import {App, PatientsListPage, PatientSummaryPage } from "pulsetile-react-admin";
import * as themeConfiguration from "./custom/themeConfig";
import CustomLayout from "./custom/Layout";

class Core extends Component {

  getHomepage = () => {
    return (localStorage.getItem('role') === 'PHR') ? PatientSummaryPage : PatientsListPage;
  };

  render() {
    return (
        <App
          themeConfiguration={themeConfiguration}
          CustomLayout={CustomLayout}
          CustomHomepage={this.getHomepage()}
      />
    )
  }
}

export default Core;
