import { all } from 'redux-saga/effects';

import currentPatientSagas from "./currentPatientSagas";
import initializeSagas from "./initializeSagas";
import demographicsSagas from "./demographicsSagas";
import httpErrorSagas from "./httpErrorSagas";
import showModeSagas from "./showModeSagas";
import showHeadingsSagas from "./showHeadingsSagas";
import patientsCountSagas from "./patientsCountSagas";
import emergencySummarySagas from "./emergencySummarySagas";
import respectSagas from "./respectSagas";
import businessIntelligenceSagas from "./businessIntelligenceSagas";
import createSynopsisSagas from "./createSynopsisSagas";
import createSynopsisNodeRedSagas from "./createSynopsisNodeRedSagas";
import feedsListSagas from "./feedsListSagas";
import feedsRssSagas from "./feedsRssSagas";
import transferOfCareSagas from "./transferOfCareSagas";
import vitalsSagas from "./vitalsSagas";

import {
    SYNOPSIS_ALLERGIES_ACTION, synopsisAllergiesAction,
    SYNOPSIS_CONTACTS_ACTION, synopsisContactsAction,
    SYNOPSIS_MEDICATIONS_ACTION, synopsisMedicationsAction,
    SYNOPSIS_PROBLEMS_ACTION, synopsisProblemsAction,
    SYNOPSIS_VACCINATIONS_ACTION, synopsisVaccinationsAction,
    SYNOPSIS_TOP_THREE_THINGS_ACTION, synopsisTopThreeThingsAction
} from "../actions/synopsisActions";

const sagas = [
    currentPatientSagas,
    createSynopsisSagas(SYNOPSIS_ALLERGIES_ACTION, synopsisAllergiesAction, 'allergies'),
    createSynopsisSagas(SYNOPSIS_CONTACTS_ACTION, synopsisContactsAction, 'contacts'),
    createSynopsisSagas(SYNOPSIS_MEDICATIONS_ACTION, synopsisMedicationsAction, 'medications'),
    createSynopsisSagas(SYNOPSIS_PROBLEMS_ACTION, synopsisProblemsAction, 'problems'),
    createSynopsisSagas(SYNOPSIS_VACCINATIONS_ACTION, synopsisVaccinationsAction, 'vaccinations'),
    createSynopsisSagas(SYNOPSIS_TOP_THREE_THINGS_ACTION, synopsisTopThreeThingsAction, 'top3Things'),
    createSynopsisNodeRedSagas(SYNOPSIS_ALLERGIES_ACTION, synopsisAllergiesAction, 'allergies'),
    createSynopsisNodeRedSagas(SYNOPSIS_MEDICATIONS_ACTION, synopsisMedicationsAction, 'medications'),
    createSynopsisNodeRedSagas(SYNOPSIS_PROBLEMS_ACTION, synopsisProblemsAction, 'problems'),
    initializeSagas,
    demographicsSagas,
    httpErrorSagas,
    showModeSagas,
    showHeadingsSagas,
    patientsCountSagas,
    emergencySummarySagas,
    respectSagas,
    businessIntelligenceSagas,
    feedsListSagas,
    feedsRssSagas,
    transferOfCareSagas,
    vitalsSagas,
];

export default function* rootSaga() {
    yield all(sagas);
}