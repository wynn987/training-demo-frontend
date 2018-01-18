import React, {Component} from "react";
import { Control, Form, actions } from 'react-redux-form';
import "./SignIn.css";
import {API_URL_PREFIX} from '../../utilities/helper';
import {connect} from 'react-redux';
import {authUser} from './SignInActions';

class Login extends Component {

  handleSubmit(user) {
    this.props.authUser(user);
  }

  render() {
    return (
      <Form
      model="user"
      onSubmit={(user) => this.handleSubmit(user)}
    >
      <label htmlFor="user.email">Email:</label>
      <Control type='email' model="user.email" id="user.email" />

      <label htmlFor="user.password">Password:</label>
      <Control type='password' model="user.password" id="user.password" />

      <button type="submit">
        Login
      </button>
    </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user, 
    hasErrored: state.userHasErrored, 
    authenticating: state.authenticating
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: (user) => dispatch(authUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);