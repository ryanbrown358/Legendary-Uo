import React, { Component } from 'react';

export default class Footer extends Component{
    render(){

        let footer = {
            color: 'white', 
        }

        return(
            <div className="container">
                    <footer className="footer">
                    <p style={footer}>&copy; 2018 - Legendary UO</p>
                    </footer>
            </div>
        );
    }
}