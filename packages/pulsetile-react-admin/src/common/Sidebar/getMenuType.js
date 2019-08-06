import get from "lodash/get";

export const defaultShortMenu = [
    { url: '/', label: 'Charts' },
    { url: '/patients', label: 'Patients' },
    { url: '/business', label: 'Business Intelligence'},
];

export const defaultFullMenu = [
    { url: '/summary', label: 'Patient Summary' },
    { url: '/problems', label: 'Problems / Issues' },
    { url: '/medications', label: 'Medications' },
    { url: '/vaccinations', label: 'Vaccinations' },
    { url: '/allergies', label: 'Allergies' },
    { url: '/contacts', label: 'Contacts' },
    { url: '/top3Things', label: 'TopThreeThings' },
    { url: '/clinicalnotes', label: 'Clinical Notes' },
    { url: '/mdtreports', label: 'MDT' },
    { url: '/events', label: 'Events' },
    { url: '/personalnotes', label: 'Personal Notes' },
    { url: '/procedures', label: 'Procedures' },
    { url: '/referrals', label: 'Referrals' },
    { url: '/labresults', label: 'Results' },
    { url: '/toc', label: 'Transfers Of Care' },
    { url: '/vitalsigns', label: 'Vitals' },
    { url: '/respect', label: 'ReSPECT' },
];

function isResourcePresentedInMenu(currentResource, menuItemsArray) {
    const filterArray = menuItemsArray.filter(item => item.url === ('/' + currentResource));
    return filterArray.length > 0;
}

export function getMenuItems(currentPathname) {
    return isResourcePresentedInMenu(currentResource, defaultFullMenu) ? defaultFullMenu : defaultShortMenu;
}

export function isSinglePatientView(currentPathname) {
    const pathArray = currentPathname.split('/');
    const currentResource = get(pathArray, [1], null);
    return isResourcePresentedInMenu(currentResource, themeFullMenu) || isResourcePresentedInMenu(currentResource, defaultFullMenu);
}
