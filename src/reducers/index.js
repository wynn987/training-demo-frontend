import {combineReducers} from 'redux';
import {authHasErrored, authenticating, user} from '../auth/SignIn/SignInReducer';
import {createForms} from 'react-redux-form';

import { reduxTokenAuthReducer } from 'redux-token-auth'

export default combineReducers({
    authHasErrored, 
    authenticating,
    reduxTokenAuth: reduxTokenAuthReducer,
    ...createForms({
        user: user,
      }),
});