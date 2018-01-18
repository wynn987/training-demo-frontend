import React from "react";
import { createBrowserHistory } from 'history'
import { Route, Router } from "react-router-dom";
import SignIn from './auth/SignIn/SignIn';
import GrantApplicationsIndex from './grant_applications/GrantApplicationIndex';
import GrantApplication from './grant_applications/GrantApplication';
import NotFound from "./errors/NotFound";
import { generateRequireSignInWrapper } from 'redux-token-auth'

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: '/login',
})

const history = createBrowserHistory({})

export default() =>
  <Router history={history}>
  <div>
    <Route exact path='/' component={SignIn}/>
    <Route exact path='/login' component={SignIn}/>
    <Route exact path='/grant_applications' component={requireSignIn(GrantApplicationsIndex)}/>
    <Route exact path='/grant_applications/:id' component={requireSignIn(GrantApplication)}/>
    <Route component={NotFound} />
  </div>
  </Router>