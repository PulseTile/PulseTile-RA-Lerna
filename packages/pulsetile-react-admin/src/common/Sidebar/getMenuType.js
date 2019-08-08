import get from "lodash/get";

export const defaultShortMenu = [
    { url: '/', label: 'Charts' },
];

export const defaultFullMenu = [
    { url: '/summary', label: 'Patient Summary' },
];

function isResourcePresentedInMenu(currentResource, menuItemsArray) {
    const filterArray = menuItemsArray.filter(item => item.url === ('/' + currentResource));
    return filterArray.length > 0;
}

export function getMenuItems(currentPathname) {
    const pathArray = currentPathname.split('/');
    const currentResource = get(pathArray, [1], null);
    return isResourcePresentedInMenu(currentResource, defaultFullMenu) ? defaultFullMenu : defaultShortMenu;
}

export function isSinglePatientView(currentPathname) {
    const pathArray = currentPathname.split('/');
    const currentResource = get(pathArray, [1], null);
    return isResourcePresentedInMenu(currentResource, defaultFullMenu);
}
