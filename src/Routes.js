import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from './auth/SignIn/SignIn';
import GrantApplicationCreate from './grant_applications/GrantApplicationCreate'
import GrantApplicationsIndex from './grant_applications/GrantApplicationIndex';
import GrantApplication from './grant_applications/GrantApplication';
import { generateRequireSignInWrapper } from 'redux-token-auth'
import NotFound from './errors/NotFound'

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: '/login',
})

export default() =>(
  <Switch>
    <Route exact path='/' component={SignIn}/>
    <Route exact path='/login' component={SignIn}/>
    <Route exact path='/grant_applications/create' component={requireSignIn(GrantApplicationCreate)}/>
    <Route exact path='/grant_applications' component={requireSignIn(GrantApplicationsIndex)}/>
    <Route exact path='/grant_applications/:id' component={requireSignIn(GrantApplication)}/>
    <Route component={NotFound} />
  </Switch>
)