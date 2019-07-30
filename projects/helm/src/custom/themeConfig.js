import backgroundImage from "../images/Artboard.png";
import cardBackgroundImage from "../images/blue-ring-01.png";
import tableHeaderImage from "../images/table-header.png";

export const themeShortMenu = [
    { id: 'menu-summary', url: '/summary', label: 'Patient Summary' },
    { id: 'menu-top3Things', url: '/top3Things', label: 'TopThreeThings' },
];

export const themeFullMenu = [
    { id: 'menu-summary', url: '/summary', label: 'Patient Summary' },
    { id: 'menu-top3Things', url: '/top3Things', label: 'TopThreeThings' },
];

export const themeCommonElements = {
    isFooterAbsent: true,
};

export const themeImages = {
    backgroundImage: backgroundImage,
    cardBackgroundImage: cardBackgroundImage,
    tableHeaderImage: tableHeaderImage,
};

export const pluginsList = [
    'top3Things',
];