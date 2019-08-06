import { createRequestTypes } from "./functions";

export const SYNOPSIS_ALLERGIES_ACTION = createRequestTypes('SYNOPSIS_ALLERGIES_ACTION', { REQUEST_NODERED: 'REQUEST_NODERED' });
export const SYNOPSIS_CONTACTS_ACTION = createRequestTypes('SYNOPSIS_CONTACTS_ACTION');
export const SYNOPSIS_MEDICATIONS_ACTION = createRequestTypes('SYNOPSIS_MEDICATIONS_ACTION', { REQUEST_NODERED: 'REQUEST_NODERED' });
export const SYNOPSIS_PROBLEMS_ACTION = createRequestTypes('SYNOPSIS_PROBLEMS_ACTION', { REQUEST_NODERED: 'REQUEST_NODERED' });
export const SYNOPSIS_TOP_THREE_THINGS_ACTION = createRequestTypes('SYNOPSIS_TOP_THREE_THINGS_ACTION');
export const SYNOPSIS_VACCINATIONS_ACTION = createRequestTypes('SYNOPSIS_VACCINATIONS_ACTION');

export const synopsisAllergiesAction = {
    request: data => ({ type: SYNOPSIS_ALLERGIES_ACTION.REQUEST, data }),
    requestNodeRed: data => ({ type: SYNOPSIS_ALLERGIES_ACTION.REQUEST_NODERED, data }),
    success: data => ({ type: SYNOPSIS_ALLERGIES_ACTION.SUCCESS, data }),
    error:   error => ({ type: SYNOPSIS_ALLERGIES_ACTION.FAILURE, error }),
};

export const synopsisContactsAction = {
    request: data => ({ type: SYNOPSIS_CONTACTS_ACTION.REQUEST, data }),
    requestNodeRed: data => ({ type: SYNOPSIS_CONTACTS_ACTION.REQUEST_NODERED, data }),
    success: data => ({ type: SYNOPSIS_CONTACTS_ACTION.SUCCESS, data }),
    error:   error => ({ type: SYNOPSIS_CONTACTS_ACTION.FAILURE, error }),
};

export const synopsisMedicationsAction = {
    request: data => ({ type: SYNOPSIS_MEDICATIONS_ACTION.REQUEST, data }),
    requestNodeRed: data => ({ type: SYNOPSIS_MEDICATIONS_ACTION.REQUEST_NODERED, data }),
    success: data => ({ type: SYNOPSIS_MEDICATIONS_ACTION.SUCCESS, data }),
    error:   error => ({ type: SYNOPSIS_MEDICATIONS_ACTION.FAILURE, error }),
};

export const synopsisProblemsAction = {
    request: data => ({ type: SYNOPSIS_PROBLEMS_ACTION.REQUEST, data }),
    requestNodeRed: data => ({ type: SYNOPSIS_PROBLEMS_ACTION.REQUEST_NODERED, data }),
    success: data => ({ type: SYNOPSIS_PROBLEMS_ACTION.SUCCESS, data }),
    error:   error => ({ type: SYNOPSIS_PROBLEMS_ACTION.FAILURE, error }),
};

export const synopsisTopThreeThingsAction = {
    request: data => ({ type: SYNOPSIS_TOP_THREE_THINGS_ACTION.REQUEST, data }),
    success: data => ({ type: SYNOPSIS_TOP_THREE_THINGS_ACTION.SUCCESS, data }),
    error:   error => ({ type: SYNOPSIS_TOP_THREE_THINGS_ACTION.FAILURE, error }),
};

export const synopsisVaccinationsAction = {
    request: data => ({ type: SYNOPSIS_VACCINATIONS_ACTION.REQUEST, data }),
    success: data => ({ type: SYNOPSIS_VACCINATIONS_ACTION.SUCCESS, data }),
    error:   error => ({ type: SYNOPSIS_VACCINATIONS_ACTION.FAILURE, error }),
};
