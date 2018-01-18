import {combineReducers} from 'redux';
import {authHasErrored, authenticating, user} from '../auth/SignIn/SignInReducer';
import {
    createForms
  } from 'react-redux-form';

export default combineReducers({
    authHasErrored, 
    authenticating,
    ...createForms({
        user: user,
      }),
});