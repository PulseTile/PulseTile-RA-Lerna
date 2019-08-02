import get from "lodash/get";

/**
 * This function extract token from COOKIE and returns it
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @return {string}
 */
function getTokenFromCookie() {
    let result = null;
    const decodedCookie = decodeURIComponent(document.cookie).split(';');
    decodedCookie.forEach(item => {
        let itemArray = item.split('=');
        let parameterName = itemArray[0];
        if (parameterName.trim() === "JSESSIONID") {
            result = itemArray[1];
        }
    });
    return result;
}

/**
 * This function returns domain name from window config settings
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @return {string}
 */
function getDomainName() {
    return (window && window.config) ? window.config.domainName : null;
}

/**
 * This function check is current project work in single patient mode
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @return {string}
 */
function checkIsSinglePatient() {
    return (window && window.config) ? window.config.isSinglePatient : false;
}

/**
 * This function return main theme color
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @return {string}
 */
function getMainColor() {
    return get(window, 'config.lightPalette.mainColor', "#ff5d00");
}

export const token = getTokenFromCookie();
export const domainName = getDomainName();
export const isSinglePatient = checkIsSinglePatient();
export const mainColor = getMainColor();

