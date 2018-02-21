import React, { Component } from 'react';


export default class SearchBar extends Component{
    render(){
        return(
            <div>
                <div className="input-field">
                    <input id="search" type="search" required placeholder="Search..." />
                       
                        
                 </div>
            </div>
        );
    }
}