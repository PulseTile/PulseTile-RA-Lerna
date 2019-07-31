import React, { Component } from "react";
import get from "lodash/get";
import { Admin, Resource } from "react-admin";

import customDataProvider from "./dataProviders/dataProvider";
import authProvider from "./dataProviders/authProvider";

import corePlugins from "./config/corePlugins";
import nonCorePlugins from "../version/config/nonCorePlugins";

import customSagas from "./sagas";
import customReducers from "./reducers";
import customRoutes from "./routes";

import Charts from "./pages/Charts";
import Layout from "./common/CustomLayout";
import InitializePage from "./pages/InitializePage";
import PatientSummaryPage from "./pages/PatientSummary";
import translations from "./translations";

const plugins = corePlugins.concat(nonCorePlugins);
const i18nProvider = locale => translations[locale];

function getRoutesArray(themeConfiguration) {
    const projectPages = get(themeConfiguration, 'pagesList', []);
    let pages = [];
    customRoutes.map(item => {
        if (projectPages.indexOf(item.page) !== -1 || item.page === 'summary') {
            pages.push(item.component);
        }
    });
    return pages;
}

function getPluginsForCurrentProject(themeConfiguration) {
    const projectPlugins = get(themeConfiguration, 'pluginsList', []);
    return projectPlugins
        ? plugins.filter(item => (projectPlugins.indexOf(item.name) !== -1 || item.name === "patients"))
        : plugins;
}

function getHomepage() {
    let result = Charts;
    const isPhrUser = localStorage.getItem('role') === 'PHR';
    if (isPhrUser) {
        result = PatientSummaryPage;
    }
    return result;
}

const App = ({ themeConfiguration, CustomHomepage, CustomLayout }) => {
    const pluginsFilter = getPluginsForCurrentProject(themeConfiguration);
    const CurrentHomepage = CustomHomepage ? CustomHomepage : getHomepage();
    const customRoutesFiltered = getRoutesArray(themeConfiguration);
    return (
        <Admin
            authProvider={authProvider}
            customSagas={[customSagas]}
            customReducers={{custom: customReducers}}
            customRoutes={customRoutesFiltered}
            dataProvider={customDataProvider}
            dashboard={CurrentHomepage}
            appLayout={CustomLayout ? CustomLayout : Layout}
            loginPage={InitializePage}
            locale="en"
            i18nProvider={i18nProvider}
        >
            {
                pluginsFilter.map(item => {
                    return (
                        <Resource
                            name={item.name}
                            options={{ label: item.label }}
                            list={item.list}
                        />
                    );
                })
            }
        </Admin>
    );
};

export default App;