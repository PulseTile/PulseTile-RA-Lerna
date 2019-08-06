import { createRequestTypes } from "./functions";

export const CURRENT_PATIENT_ACTION = createRequestTypes('CURRENT_PATIENT_ACTION', {
    REQUEST_NODERED: 'REQUEST_NODERED',
    SUCCESS_NODERED: 'SUCCESS_NODERED',
    REQUEST_PHOTO: 'REQUEST_PHOTO',
    SUCCESS_PHOTO: 'SUCCESS_PHOTO',
    FAILURE_PHOTO: 'FAILURE_PHOTO'
});

export const currentPatientAction = {
    request: data => ({ type: CURRENT_PATIENT_ACTION.REQUEST, data }),
    success: data => ({ type: CURRENT_PATIENT_ACTION.SUCCESS, data }),
    requestNodeRed: data => ({ type: CURRENT_PATIENT_ACTION.REQUEST_NODERED, data }),
    successNodeRed: data => ({ type: CURRENT_PATIENT_ACTION.SUCCESS_NODERED, data }),
    error:   error => ({ type: CURRENT_PATIENT_ACTION.FAILURE, error }),
    requestPhoto: data => ({ type: CURRENT_PATIENT_ACTION.REQUEST_PHOTO, data }),
    successPhoto: data => ({ type: CURRENT_PATIENT_ACTION.SUCCESS_PHOTO, data }),
    errorPhoto: data => ({ type: CURRENT_PATIENT_ACTION.FAILURE_PHOTO, data }),
};