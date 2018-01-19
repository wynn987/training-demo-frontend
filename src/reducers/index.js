import {combineReducers} from 'redux';
import {user} from '../auth/SignIn/SignInReducer';
import {createForms} from 'react-redux-form';

import { reduxTokenAuthReducer } from 'redux-token-auth'

export default combineReducers({
    reduxTokenAuth: reduxTokenAuthReducer,
    ...createForms({
        user: user,
      }),
});