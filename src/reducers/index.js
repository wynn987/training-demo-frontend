import {combineReducers} from 'redux';
import {user} from '../auth/SignIn/SignInReducer';
import {createForms} from 'react-redux-form';
import { grantApplications, grantsIndexError, grantApplication,
         grantsShowError, grantsCreateError, grantsCreateSuccess,
         grantsUpdateError, grantsUpdateSuccess, grantApplicationSelector} 
       from '../grant_applications/GrantApplicationReducer';
import { reduxTokenAuthReducer } from 'redux-token-auth'

const initialGrantApplicationState = {
    applicant_name: '',
    application_type: ''
}

export default combineReducers({
    reduxTokenAuth: reduxTokenAuthReducer,
    grantApplications,
    grantsIndexError,
    grantApplication,
    grantsShowError,
    grantsCreateSuccess,
    grantsCreateError,
    grantsUpdateSuccess,
    grantsUpdateError,
    grantApplicationSelector,
    ...createForms({
        user: user,
        grant_application: initialGrantApplicationState
      }),
});