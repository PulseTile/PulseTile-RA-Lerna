import { FeedsSelectors, FeedsPanels, Charts, RespectSummaryPanel, } from "pulsetile-react-admin";

import BackgroundImage from "../images/background.jpg";
import logo from "../images/pulsetile-logo.png";

export const themeShortMenu = [
    { id: 'menu-charts',   url: '/',         label: 'Charts' },
    { id: 'menu-patients', url: '/patients', label: 'Patients' },
    { id: 'menu-business', url: '/business', label: 'Business Intelligence'},
];

export const themeFullMenu = [
    { id: 'menu-summary',       url: '/summary',       label: 'Patient Summary' },
    { id: 'menu-problems',      url: '/problems',      label: 'Problems / Issues' },
    { id: 'menu-medications',   url: '/medications',   label: 'Medications' },
    { id: 'menu-vaccinations',  url: '/vaccinations',  label: 'Vaccinations' },
    { id: 'menu-allergies',     url: '/allergies',     label: 'Allergies' },
    { id: 'menu-contacts',      url: '/contacts',      label: 'Contacts' },
    { id: 'menu-top3Things',    url: '/top3Things',    label: 'TopThreeThings' },
    { id: 'menu-clinicalnotes', url: '/clinicalnotes', label: 'Clinical Notes' },
    { id: 'menu-mdtreports',    url: '/mdtreports',    label: 'MDT' },
    { id: 'menu-events',        url: '/events',        label: 'Events' },
    { id: 'menu-personalnotes', url: '/personalnotes', label: 'Personal Notes' },
    { id: 'menu-procedures',    url: '/procedures',    label: 'Procedures' },
    { id: 'menu-referrals',     url: '/referrals',     label: 'Referrals' },
    { id: 'menu-labresults',    url: '/labresults',    label: 'Results' },
    { id: 'menu-toc',           url: '/toc',           label: 'Transfers Of Care' },
    { id: 'menu-vitalsigns',    url: '/vitalsigns',    label: 'Vitals' },
    { id: 'menu-respect',       url: '/respect',       label: 'ReSPECT' },
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
    homePage: Charts,
    respectPanel: RespectSummaryPanel,
    hasEmergencySummaryPanel: true,
    hasPatientSummaryRoll: true,
};

export const themeImages = {
    backgroundImage: BackgroundImage,
    logo: logo,
};

export const pagesList = [
    'charts',
    'respect',
    'business',
];

export const pluginsList = [
    'allergies',
    'contacts',
    'medications',
    'problems',
    'vaccinations',
    'top3Things',
    'events',
    'clinicalnotes',
    'mdtreports',
    'procedures',
    'personalnotes',
    'referrals',
    'labresults',
    'toc',
    'vitalsigns',
];

export const pluginsOnlyForReview = [
    'labresults',
];