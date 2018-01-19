import React, {Component} from "react";
import {Control, Form} from 'react-redux-form';
import { Redirect } from 'react-router'
import "./SignIn.css";
import {connect} from 'react-redux';
import { signInUser } from '../../redux-token-auth-config'

class Login extends Component {

  handleSubmit(user) {
    const { signInUser } = this.props
    const  {
      email,
      password,
    } = user
    signInUser({ email, password })
    .then(handleLogin())
    .catch((error) => {
      console.log(error);
  })
  }

  handleLogin(){
    if (this.props.isSignedIn){
      
    }
  }

  render() {
    return (
      <div className='login-page'>
        <Form className='form' model="user" onSubmit={(user) => this.handleSubmit(user)}>

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

function mapStateToProps(state) {
  return { isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn};
}

export default connect(mapStateToProps, {signInUser})(Login);