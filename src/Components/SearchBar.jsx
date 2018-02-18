import React, { Component } from 'react';


export default class SearchBar extends Component{
    render(){
        return(
            <div>
                 <div className="input-field">
                        <input id="search" type="search" required/>
                        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                 </div>
            </div>
        );
    }
}