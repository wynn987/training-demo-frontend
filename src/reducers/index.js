import {combineReducers} from 'redux';
import {user} from '../auth/SignIn/SignInReducer';
import {createForms} from 'react-redux-form';
import { grantApplications, grantsIndexError, grantApplication,
         grantsShowError, grantsCreateError, grantsCreateSuccess } 
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
    ...createForms({
        user: user,
        grant_application: initialGrantApplicationState
      }),
});