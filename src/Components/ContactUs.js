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
                <div>
                    <h1 className="amber-text text-accent-3 left">Contact Us</h1>
                </div>
              <br />
              
            <form onSubmit={this.onSubmit.bind(this)}>
          
              <div className="input-field ">
                       
                        <input id="email" type="email" ref="email" placeholder="Your Email Address" />
                
              </div>
          
              <br />
          
              <div className="input-field ">
                       
                        <input type="text" id="itextarea1" className="materialize-textarea" data-length="" ref="message" placeholder="Your Message" /> 
              
              </div>
          
              <br />
              
              <button className="btn hoverable right" formTarget="_blank" type="submit" value="Send">Send</button>
            </form>
          
          </div>
        );
    }
}