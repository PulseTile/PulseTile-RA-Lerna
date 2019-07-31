import React from 'react';
import { Route } from 'react-router-dom';

import Charts from './pages/Charts';
import PatientSummary from './pages/PatientSummary';
import nonCoreRoutes from "../version/routes";

const coreRoutes = [
    { page: 'charts', component: <Route exact path="/charts" component={Charts} /> },
    { page: 'summary', component: <Route exact path="/summary" component={PatientSummary} /> },
];

export default coreRoutes.concat(nonCoreRoutes);