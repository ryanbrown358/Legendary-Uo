import React, { Component } from 'react';
 import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {

  submitUser(loginUser) {
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/Users/login',
      data: loginUser
    }).then(response => {
      this.props.history.push('/home');
    }).catch(err => console.log(err));
  }

  onSubmit(e) {
    const loginUser = {
      email: this.refs.email.value,
      password: this.refs.password.value,
    }
    this.submitUser(loginUser);
    e.preventDefault();
  }






  render() {
    return (
      <div>

        <h1>Login</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="email" ref="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input type="text" name="password" ref="password" />
            <label htmlFor="password">  Password</label>
          </div>
          <input type="submit" value="Login" className="btn blue darken-3" />
          <Link className="btn right" to="/newAccount">Create Account</Link>
        </form>
      </div>
    )
  }
}
export default Login;
