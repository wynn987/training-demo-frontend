import {combineReducers} from 'redux';
import {user} from '../auth/SignIn/SignInReducer';
import {createForms} from 'react-redux-form';
import { grantApplications, grantsIndexError } from '../grant_applications/GrantApplicationReducer';
import { reduxTokenAuthReducer } from 'redux-token-auth'

export default combineReducers({
    reduxTokenAuth: reduxTokenAuthReducer,
    grantApplications,
    grantsIndexError,
    ...createForms({
        user: user,
      }),
});