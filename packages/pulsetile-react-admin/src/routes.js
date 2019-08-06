import React from 'react';
import { Route } from 'react-router-dom';

import Charts from './pages/Charts';
import PatientSummary from './pages/PatientSummary';
import ReSPECT from './pages/ReSPECT';
import BusinessIntelligence from "./pages/BusinessIntelligence";

export default [
    { page: 'charts', component: <Route exact path="/charts" component={Charts} /> },
    { page: 'summary', component: <Route exact path="/summary" component={PatientSummary} /> },
    { page: 'respect', component: <Route exact path="/respect" component={ReSPECT} /> },
    { page: 'business', component: <Route exact path="/business" component={BusinessIntelligence} /> },
];