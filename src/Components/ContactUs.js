import React, { Component } from 'react';
import axios from 'axios';



export default class ContactUs extends Component{

    sendEmail(newEmail){
        axios.request({
            method:'post',
            url:'http://formspree.io/mikelawson114@gmail.com',
            data: newEmail
        }).then(response => {
            this.props.history.push('/Thanks');
        }).catch(err => console.log(err));
    }
    
    onSubmit(e){
        const newEmail ={
            email: this.refs.email.value,
            message: this.refs.message.value,
            
            
        }
        this.sendEmail(newEmail);
        e.preventDefault();
    }

    render(){
        return(
            <div>
            <h1>Contact Us</h1>
           
              <br />
              
            <form onSubmit={this.onSubmit.bind(this)}>
          
              <div className="input-field ">
                <i className="material-icons prefix">mail</i>
                <input id="email" type="email" ref="email" />
                <label htmlFor="email">Your Email Address</label>
              </div>
          
              <br />
          
              <div className="input-field ">
                <i className="material-icons prefix">create</i>
                <input type="text" id="itextarea1" className="materialize-textarea" data-length="" ref="message"  /> 
                <label htmlFor="itextarea1">Email</label>
              </div>
          
              <br />
              
              <button className="btn hoverable" formTarget="_blank" type="submit" value="Send">Send</button>
            </form>
          
          </div>
        );
    }
}