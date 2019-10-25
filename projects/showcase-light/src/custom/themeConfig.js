import { FeedsSelectors, FeedsPanels, PatientsListPage, RespectSummaryPanel, } from "pulsetile-react-admin";

import BackgroundImage from "../images/background.jpg";
import logo from "../images/pulsetile-logo.png";

export const themeShortMenu = [
    { id: 'menu-patients', url: '/', label: 'Patients' },
];

export const themeFullMenu = [
    { id: 'menu-summary',       url: '/summary',       label: 'Patient Summary' },
    { id: 'menu-problems',      url: '/problems',      label: 'Problems / Issues' },
    { id: 'menu-medications',   url: '/medications',   label: 'Medications' },
    { id: 'menu-vaccinations',  url: '/vaccinations',  label: 'Vaccinations' },
    { id: 'menu-allergies',     url: '/allergies',     label: 'Allergies' },
    { id: 'menu-contacts',      url: '/contacts',      label: 'Contacts' },
    { id: 'menu-vitalsigns',    url: '/vitalsigns',    label: 'Vitals' },
];

export const themeCommonElements = {
    isQwedVersion: true,
    menuHasChevrons: true,
    invertedTableHeaders: true,
    isTableHeaderIcon: true,
    patientSummaryPermission: true,
    patientListColumnToggling: true,
    isPatientListCount: true,
    redirectToPlugin: true,
    feedsSelectors: FeedsSelectors,
    feedsPanels: FeedsPanels,
    homePage: PatientsListPage,
    respectPanel: RespectSummaryPanel,
    hasEmergencySummaryPanel: true,
};

export const themeImages = {
    backgroundImage: BackgroundImage,
    logo: logo,
};

export const pagesList = [
    'respect',
];

export const pluginsList = [
    'allergies',
    'contacts',
    'medications',
    'problems',
    'vaccinations',
    'vitalsigns',
];

export const pluginsOnlyForReview = [];