import React, { Component } from 'react';

export default class Home extends Component{

   

    render(){

        let home = {
            color: 'white'
        }

        return(
            <div>
                <h1 id="home" style={home}>Welcome to Legendary UO</h1>
                <h1>TESTING</h1>
            </div>
        );
    }