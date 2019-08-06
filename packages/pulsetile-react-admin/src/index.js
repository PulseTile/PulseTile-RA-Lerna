// CORE PART
import App from "./core/App";

// ACTION
import { contrastModeAction } from "./version/actions/contrastModeAction";
import { currentPatientAction } from "./core/actions/currentPatientAction";
import { demographicsAction } from "./core/actions/demographicsAction";
import { userSearchAction } from "./core/actions/userSearchAction";

// PAGES
import PatientSummaryPage from "./core/pages/PatientSummary";
import PatientsListPage from "./core/pages/PatientsList";
import Charts from "./core/pages/Charts";

// COMPONENTS
import ContrastMode from "./version/features/ContrastMode";
import PageTitle from "./core/common/Topbar/fragments/PageTitle";
import PatientBanner from "./core/common/Topbar/fragments/PatientBanner";
import CustomLogoutButton from "./core/common/Buttons/CustomLogoutButton";
import FeedsSelectors from "./core/plugins/Feeds/FeedsSelectors";
import FeedsPanels from "./core/plugins/Feeds/FeedsPanels";
import RespectSummaryPanel from "./core/pages/ReSPECT/fragments/summaryPanel";
import AdvancedUserSearch from "./core/common/Topbar/fragments/AdvancedUserSearch";
import UserSearch from "./core/common/Topbar/fragments/UserSearch";

import { ThemeConfigurationContext, ThemeConfigurationProvider, ThemeConfigurationConsumer } from "./core/themeConfigurationContext";

export {
    App,

    contrastModeAction,
    currentPatientAction,
    demographicsAction,
    userSearchAction,

    PatientSummaryPage,
    PatientsListPage,
    Charts,

    PageTitle,
    PatientBanner,
    ContrastMode,
    CustomLogoutButton,
    FeedsSelectors,
    FeedsPanels,
    RespectSummaryPanel,
    AdvancedUserSearch,
    UserSearch,

    ThemeConfigurationProvider,
    ThemeConfigurationConsumer,
    ThemeConfigurationContext,
};
