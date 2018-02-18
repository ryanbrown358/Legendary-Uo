import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class NavBar extends Component{
    render(){
        return(

            <div>
                  <nav>
                    <div class="nav-wrapper">
                    <a  class="brand-logo right">Logo</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/UploadPictures">Upload Items</Link></li>
                        <li><Link to="/Items" >Items For Sale</Link></li>
                        <li><a >JavaScript</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
