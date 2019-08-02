import { RespectSummaryPanel, } from "pulsetile-react-admin";

import logo from "../images/logo-landing.png";

export const themeShortMenu = [
    { id: 'menu-patients', url: '/patients', label: 'Patients' },
];

export const themeFullMenu = [
    { id: 'menu-summary', url: '/summary', label: 'Patient Summary' },
    { id: 'menu-respect', url: '/respect', label: 'ReSPECT' },
];

export const themeCommonElements = {
    respectPanel: RespectSummaryPanel,
};

export const themeImages = {
    logo: logo,
};

export const pagesList = [
    'respect',
];

export const pluginsList = [];