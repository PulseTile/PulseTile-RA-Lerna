import get from "lodash/get";
import { takeEvery, put } from 'redux-saga/effects';

import { token, domainName } from "../token";
import { httpErrorAction } from '../actions/httpErrorAction';

let responseInfo = {};

export default function createCustomNodeRedSagas(actionName, actionType, pluginName) {
    return takeEvery(actionName.REQUEST_NODERED, function*(action) {
        let url = domainName + '/patient/' + localStorage.getItem('patientId') + '/synopsis/' + pluginName;
        let options = {};
        options.method = "GET";
        if (!options.headers) {
        }
        options.headers = {
            Authorization: "Bearer " + token,
        };

        try {
            const result = yield fetch(url, options)
                .then(res => {
                    responseInfo.status = get(res, 'status', null);
                    return res.json()
                })
                .then(res => {
                    if (responseInfo.status !== 200) {
                        responseInfo.errorMessage = get(res, 'error', null);
                        return false;
                    }
                    return res;
                });

            if (responseInfo.status === 200) {
                yield put(actionType.success(result))
            } else {
                yield put(actionType.error('No data'))
            }

        } catch(e) {
            yield put(actionType.error(e))
        }
    });
}