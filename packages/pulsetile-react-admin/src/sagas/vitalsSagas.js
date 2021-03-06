import { takeEvery, put } from 'redux-saga/es/effects';

import { token, domainName } from "../token";
import { VITALS_ACTION, vitalsAction } from "../actions/vitalsAction";

const vitalsRequest = takeEvery(VITALS_ACTION.REQUEST, function*(action) {
    const url = domainName + '/api/patients/' + localStorage.getItem('patientId') + '/vitalsigns';
    let options = {};
    options.method = 'GET';
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    options.headers = {
        Authorization: "Bearer " + token,
        'X-Requested-With': "XMLHttpRequest",
    };
    try {
        const result = yield fetch(url, options).then(res => res.json());
        yield put(vitalsAction.success(result));
    } catch(e) {
        yield put(vitalsAction.error(e));
    }
});

const vitalsRequestNodeRed = takeEvery(VITALS_ACTION.REQUEST_NODERED, function*(action) {
    const url = domainName + '/patient/' + localStorage.getItem('patientId') + '/vitalsigns';
    let options = {};
    options.method = 'GET';
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    options.headers = {
        Authorization: "Bearer " + token,
        'X-Requested-With': "XMLHttpRequest",
    };
    try {
        const result = yield fetch(url, options).then(res => res.json());
        yield put(vitalsAction.success(result));
    } catch(e) {
        yield put(vitalsAction.error(e));
    }
});

export default [
    vitalsRequest,
    vitalsRequestNodeRed,
];