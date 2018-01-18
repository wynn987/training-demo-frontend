import React, {Component} from "react";
import {Control, Form} from 'react-redux-form';
import "./SignIn.css";
import {connect} from 'react-redux';
import { signInUser } from '../../redux-token-auth-config'

class Login extends Component {

  handleSubmit(user) {
    console.log('handle submit');
    console.log(signInUser);
    console.log(user);
    signInUser({
      email: user.email,
      password: user.password
    })
    .then(
      
    )
    .catch(error => {
      console.log(error);
    })
      

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

export default connect(null, {signInUser})(Login);