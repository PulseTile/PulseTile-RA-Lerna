import { RespectSummaryPanel, } from "pulsetile-react-admin";

import logo from "../images/logo-header.png";
import backgroundImage from "../images/containerBackground.png";

export const themeShortMenu = [
    { id: 'menu-patients', url: '/patients', label: 'Patients' },
];

export const themeFullMenu = [
    { id: 'menu-summary',       url: '/summary',       label: 'Patient Summary' },
    { id: 'menu-problems',      url: '/problems',      label: 'Problems / Issues' },
    { id: 'menu-medications',   url: '/medications',   label: 'Medications' },
    { id: 'menu-vaccinations',  url: '/vaccinations',  label: 'Vaccinations' },
    { id: 'menu-allergies',     url: '/allergies',     label: 'Allergies' },
    { id: 'menu-contacts',      url: '/contacts',      label: 'Contacts' },
    { id: 'menu-top3Things',    url: '/top3Things',    label: 'About Me' },
];

export const themeCommonElements = {
    isQwedVersion: true,
};

export const themeImages = {
    backgroundImage: backgroundImage,
    logo: logo,
};

export const pagesList = [
    'patients',
];

export const pluginsList = [
    'allergies',
    'contacts',
    'medications',
    'vaccinations',
    'problems',
    'top3Things'
];

export const pluginsOnlyReview = [
    'allergies',
    'contacts',
    'medications',
    'vaccinations',
    'problems',
];