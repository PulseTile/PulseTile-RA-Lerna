import { combineReducers } from 'redux';

import currentPatientReducer from "./currentPatientReducer";
import showHeadings from "./showHeadingsReducer";

import createCustomReducer from "./createCustomReducer";
import createCustomSynopsisReducer from "./createCustomSynopsisReducer";
import createRespectPluginReducer from "./createRespectPluginReducer";

import httpErrorReducer from "./httpErrorReducer";
import userSearchReducer from "./userSearchReducer";
import toggleColumnsReducer from "./toggleColumnsReducer";
import advancedSearchReducer from "./advancedSearchReducer";
import clinicalQueryReducer from "./clinicalQueryReducer";
import patientsCountReducer from "./patientsCountReducer";
import emergencySummaryReducer from "./emergencySummaryReducer";

import versionsServerInfo from "../../core/reducers/versionsServerInfoReducer";
import businessIntelligenceReducer from "./businessIntelligenceReducer";

import {
    SYNOPSIS_ALLERGIES_ACTION,
    SYNOPSIS_CONTACTS_ACTION,
    SYNOPSIS_MEDICATIONS_ACTION,
    SYNOPSIS_PROBLEMS_ACTION,
    SYNOPSIS_TOP_THREE_THINGS_ACTION,
    SYNOPSIS_VACCINATIONS_ACTION
} from "../actions/synopsisActions";

import { PERSONAL_DETAILS_ACTION } from "../actions/ReSPECT/personalDetailsAction";
import { SUMMARY_INFORMATION_ACTION } from "../actions/ReSPECT/summaryInformationAction";
import { PERSONAL_PREFERENCES_ACTION } from "../actions/ReSPECT/personalPreferencesAction";
import { CLINICAL_RECOMMENDATIONS_ACTION } from "../actions/ReSPECT/clinicalRecommendationsAction";
import { CAPACITY_AND_REPRESENTATION_ACTION } from "../actions/ReSPECT/capacityAndRepresentationAction";
import { INVOLVEMENT_ACTION } from "../actions/ReSPECT/involvenentAction";
import { CLINICAL_SIGNATURES_ACTION } from "../actions/ReSPECT/clinicalSignaturesAction";
import { EMERGENCY_CONTACTS_ACTION } from "../actions/ReSPECT/emergencyContactsAction";
import { CONFIRMATION_ACTION } from "../actions/ReSPECT/confirmationAction";
import { EMERGENCY_VIEW_ACTION } from "../actions/ReSPECT/emergencyViewAction";
import { INITIALIZE_ACTION } from "../actions/initializeAction";
import { DEMOGRAPHICS_ACTION } from "../actions/demographicsAction";
import { SHOW_MODE_ACTION } from "../actions/showModeAction";
import { FEEDS_LIST_ACTION } from "../actions/feedsListAction";

import selectedFeedsList from "./selectedFeedsReducer";
import feedsRss from "./feedsRssReducer";
import transferOfCareReducer from "./transferOfCareReducer";
import respectModal from "./respectModalReducer";
import vitalsReducer from "./vitalsReducer";

// LINK TO NON-CORE CUSTOM REDUCERS
import nonCoreReducers from "../../version/reducers";

const coreReducers = {
    allergiesSynopsis: createCustomSynopsisReducer(SYNOPSIS_ALLERGIES_ACTION, "data.synopsis"),
    contactsSynopsis: createCustomReducer(SYNOPSIS_CONTACTS_ACTION, "data.synopsis"),
    medicationsSynopsis: createCustomSynopsisReducer(SYNOPSIS_MEDICATIONS_ACTION, "data.synopsis"),
    problemsSynopsis: createCustomSynopsisReducer(SYNOPSIS_PROBLEMS_ACTION, "data.synopsis"),
    vaccinationsSynopsis: createCustomReducer(SYNOPSIS_VACCINATIONS_ACTION, "data.synopsis"),
    top3ThingsSynopsis: createCustomReducer(SYNOPSIS_TOP_THREE_THINGS_ACTION, "data.synopsis"),
    initialize: createCustomReducer(INITIALIZE_ACTION, "data"),
    demographics: createCustomReducer(DEMOGRAPHICS_ACTION, "data.demographics"),
    httpErrors: httpErrorReducer,
    showMode: createCustomReducer(SHOW_MODE_ACTION, "data"),
    showHeadings,
    userSearch: userSearchReducer,
    currentPatient: currentPatientReducer,
    toggleColumns: toggleColumnsReducer,
    advancedSearch: advancedSearchReducer,
    clinicalQuery: clinicalQueryReducer,
    patientsCount: patientsCountReducer,
    emergencySummary: emergencySummaryReducer,
    businessIntelligence: businessIntelligenceReducer,
    personalDetails: createRespectPluginReducer(PERSONAL_DETAILS_ACTION),
    summaryInformation: createRespectPluginReducer(SUMMARY_INFORMATION_ACTION),
    personalPreferences: createRespectPluginReducer(PERSONAL_PREFERENCES_ACTION),
    clinicalRecommendations: createRespectPluginReducer(CLINICAL_RECOMMENDATIONS_ACTION),
    capacityAndRepresentation: createRespectPluginReducer(CAPACITY_AND_REPRESENTATION_ACTION),
    involvement: createRespectPluginReducer(INVOLVEMENT_ACTION),
    clinicalSignatures: createRespectPluginReducer(CLINICAL_SIGNATURES_ACTION),
    emergencyContacts: createRespectPluginReducer(EMERGENCY_CONTACTS_ACTION),
    confirmation: createRespectPluginReducer(CONFIRMATION_ACTION),
    emergencyView: createRespectPluginReducer(EMERGENCY_VIEW_ACTION),
    versionsServerInfo,
    feedsList: createCustomReducer(FEEDS_LIST_ACTION, "data"),
    selectedFeedsList,
    feedsRss,
    transferOfCare: transferOfCareReducer,
    vitalsForChart: vitalsReducer,
    respectModal,
};

const reducers = Object.assign({}, coreReducers, nonCoreReducers);

export default combineReducers(reducers);