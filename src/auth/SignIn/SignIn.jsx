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
        <h3>Grant Application</h3>
          <hr />
          <Control type='email' placeholder='Email' model="user.email" id="user.email"/>
          <Control type='password' placeholder='Password' model="user.password" id="user.password"/>
          <button type="submit">
            Login
          </button>
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