import { createRequestTypes } from "../../core/actions/functions";

export const VITALS_ACTION = createRequestTypes('VITALS_ACTION', { REQUEST_NODERED: 'REQUEST_NODERED', CURRENT: 'CURRENT' });

export const vitalsAction = {
    request: data => ({ type: VITALS_ACTION.REQUEST, data }),
    requestNodeRed: data => ({ type: VITALS_ACTION.REQUEST_NODERED, data }),
    success: data => ({ type: VITALS_ACTION.SUCCESS, data }),
    error: data => ({ type: VITALS_ACTION.FAILURE, data }),
    current: (id, number) => ({ type: VITALS_ACTION.CURRENT, id, number }),
};