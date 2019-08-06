import FeedsSelectors from "../../core/plugins/Feeds/FeedsSelectors";
import FeedsPanels from "../../core/plugins/Feeds/FeedsPanels";
import Charts from "../../core/pages/Charts";

export const themeCommonElements = {
    menuHasChevrons: true,
    invertedTableHeaders: true,
    patientSummaryPermission: true,
    patientListColumnToggling: true,
    isPatientListCount: true,
    redirectToPlugin: true,
    feedsSelectors: FeedsSelectors,
    feedsPanels: FeedsPanels,
    homePage: Charts,
    hasEmergencySummaryPanel: true,
    hasPatientSummaryRoll: true,
};

