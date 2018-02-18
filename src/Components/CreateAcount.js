import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CreateAccount extends Component {

  addNewUser(newUser) {
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/Users',
      data: newUser
    }).then(response => {
      this.props.history.push('/home');
    }).catch(err => console.log(err));
  }

  onSubmit(e) {
    const newUser = {
      email: this.refs.email.value,
      password: this.refs.password.value,
    }
    this.addNewUser(newUser);
    e.preventDefault();
  }




  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to='/home'>Back</Link>
        <h1>Add User</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="email" ref="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input type="text" name="password" ref="password" />
            <label htmlFor="password">  Password</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}
export default CreateAccount;