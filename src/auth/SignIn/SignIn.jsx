import React, {Component} from "react";
import {Control, Form} from 'react-redux-form';
import "./SignIn.css";
import {connect} from 'react-redux';
import {authUser} from './SignInActions';

class Login extends Component {

  handleSubmit(user) {
    this
      .props
      .authUser(user);
  }

  render() {
    return (
      <div class='login-page'>
        <Form class='form' model="user" onSubmit={(user) => this.handleSubmit(user)}>
          <div class='row'>
            <label htmlFor="user.email">Email:</label>
            <Control type='email' model="user.email" id="user.email"/>
          </div>
          <div class='row'>
            <label htmlFor="user.password">Password:</label>
            <Control
              type='password'
              model="user.password"
              id="user.password"/>
          </div>
          <div class='row'>
          <br/>
            <button type="submit">
              Login
            </button>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user, hasErrored: state.userHasErrored, authenticating: state.authenticating};
};

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: (user) => dispatch(authUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);