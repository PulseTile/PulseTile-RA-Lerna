import logo from "../images/logo-header.png";

export const themeShortMenu = [
    { id: 'menu-patients', url: '/patients', label: 'Patients' },
];

export const themeFullMenu = [
    { id: 'menu-summary', url: '/summary', label: 'Patient Summary' },
    { id: 'menu-problems',      url: '/problems',      label: 'Problems / Issues' },
    { id: 'menu-medications',   url: '/medications',   label: 'Medications' },
    { id: 'menu-allergies',     url: '/allergies',     label: 'Allergies' },
    { id: 'menu-vitalsigns',    url: '/vitalsigns',    label: 'Vitals' },
];

export const themeCommonElements = {};

export const themeImages = {
    logo: logo,
};

export const pagesList = [
    'summary',
];

export const pluginsList = [
    'allergies',
    'problems',
    'medications',
    'vitalsigns'
];