import React from 'react';
import { Route } from 'react-router-dom';

import ReSPECT from './pages/ReSPECT';
import BusinessIntelligence from "./pages/BusinessIntelligence";

export default [
    { page: 'respect', component: <Route exact path="/respect" component={ReSPECT} /> },
    { page: 'business', component: <Route exact path="/business" component={BusinessIntelligence} /> },
];