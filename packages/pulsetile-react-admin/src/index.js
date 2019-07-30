import React from "react";
import ReactDOM from "react-dom";

// CORE PART
import App from "./core/App";

// ACTIONS
import { demographicsAction } from "./core/actions/demographicsAction";
import { userSearchAction } from "./core/actions/userSearchAction";

// PAGES
import PatientSummaryPage from "./core/pages/PatientSummary";

// COMPONENTS
import ContrastMode from "./version/features/ContrastMode";
import PageTitle from "./core/common/Topbar/fragments/PageTitle";
import PatientBanner from "./core/common/Topbar/fragments/PatientBanner";
import CustomLogoutButton from "./core/common/Buttons/CustomLogoutButton";

export default {
    App: ReactDOM.render(<App />, document.getElementById("root")),

    demographicsAction: demographicsAction,
    userSearchAction: userSearchAction,

    PatientSummaryPage: PatientSummaryPage,

    PageTitle: PageTitle,
    PatientBanner: PatientBanner,
    ContrastMode: ContrastMode,
    CustomLogoutButton: CustomLogoutButton,
};
