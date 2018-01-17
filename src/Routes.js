import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from './auth/SignIn/SignIn';
import GrantApplicationsIndex from './grant_applications/GrantApplicationIndex';
import GrantApplication from './grant_applications/GrantApplication';
import NotFound from "./errors/NotFound";

export default() =>
  <Switch>
    <Route exact path='/' component={SignIn}/>
    <Route exact path='/login' component={SignIn}/>
    <Route exact path='/grant_applications' component={GrantApplicationsIndex}/>
    <Route exact path='/grant_applications/:id' component={GrantApplication}/>
    <Route component={NotFound} />
  </Switch>