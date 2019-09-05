import logo from "../images/logo-title.png";
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
    { id: 'menu-events',        url: '/events',        label: 'Events' },
    { id: 'menu-procedures',    url: '/procedures',    label: 'Procedures' },
    { id: 'menu-labresults',    url: '/labresults',    label: 'Results' },
    { id: 'menu-vitalsigns',    url: '/vitalsigns',    label: 'Vitals' },
];

export const themeCommonElements = {
    isQwedVersion: true,
    menuHasChevrons: true,
    invertedTableHeaders: true,
    patientIdLabel: 'UAE ID',
    isCreateButtonInverted: true,
    isPatientSystemInformationAbsent: true,
    showPatientsAge: true,
    hidePatientPostCode: true,
    hidePatientDistrict: true,
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
    'vitalsigns',
    'procedures',
    'labresults',
    'events',
];

export const pluginsOnlyForReview = [
    'labresults',
];