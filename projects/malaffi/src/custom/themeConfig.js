import logo from "../images/logo-title.png";
import backgroundImage from "../images/01.png";

export const themeShortMenu = [
    { id: 'menu-patients', url: '/patients', label: 'Patients' },
];

export const themeFullMenu = [
    { id: 'menu-summary',       url: '/summary',       label: 'Patient Summary' },
    { id: 'menu-problems',      url: '/problems',      label: 'Problems / Issues' },
    { id: 'menu-medications',   url: '/medications',   label: 'Medications' },
    { id: 'menu-allergies',     url: '/allergies',     label: 'Allergies' },
    { id: 'menu-contacts',      url: '/contacts',      label: 'Contacts' },
    { id: 'menu-vaccinations',  url: '/vaccinations',  label: 'Vaccinations' },
];

export const themeCommonElements = {
    isQwedVersion: true,
    menuHasChevrons: true,
    invertedTableHeaders: true,
    patientIdLabel: 'UAE ID',
    isCreateButtonInverted: true,
    isPatientSystemInformationAbsent: true,
    showPatientsAge: true,
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
];

export const pluginsOnlyForReview = [
    'allergies',
    'medications',
    'vaccinations',
    'problems',
];