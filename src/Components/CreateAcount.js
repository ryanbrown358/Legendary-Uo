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

        <h1 className="left amber-text text-accent-3">Add User</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
                <div className="input-field">
                    <input type="text" name="email" ref="email" placeholder="Email" />
           
          </div>
                <div className="input-field">
                    <input type="text" name="password" ref="password" placeholder="Password" />
          
          </div>
          <input type="submit" value="Save" className="btn right" />
          <Link className="left btn grey" to='/'>Back</Link>
        </form>
      </div>
    )
  }
}
export default CreateAccount;