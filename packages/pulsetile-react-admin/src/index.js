// CORE PART
import App from "./App";

// ACTION
import { contrastModeAction } from "./actions/contrastModeAction";
import { currentPatientAction } from "./actions/currentPatientAction";
import { demographicsAction } from "./actions/demographicsAction";
import { userSearchAction } from "./actions/userSearchAction";

// PAGES
import PatientSummaryPage from "./pages/PatientSummary";
import PatientsListPage from "./pages/PatientsList";
import Charts from "./pages/Charts";

// COMPONENTS
import ContrastMode from "./features/ContrastMode";
import PageTitle from "./common/Topbar/fragments/PageTitle";
import PatientBanner from "./common/Topbar/fragments/PatientBanner";
import CustomLogoutButton from "./common/Buttons/CustomLogoutButton";
import FeedsSelectors from "./plugins/Feeds/FeedsSelectors";
import FeedsPanels from "./plugins/Feeds/FeedsPanels";
import RespectSummaryPanel from "./pages/ReSPECT/fragments/summaryPanel";
import AdvancedUserSearch from "./common/Topbar/fragments/AdvancedUserSearch";
import UserSearch from "./common/Topbar/fragments/UserSearch";

import { ThemeConfigurationContext, ThemeConfigurationProvider, ThemeConfigurationConsumer } from "./themeConfigurationContext";

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
