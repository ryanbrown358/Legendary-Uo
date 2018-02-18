import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class NavBar extends Component{
    render(){
        return(

            <div>
                  <nav>
                    <div className="nav-wrapper  amber accent-4">
                    <div className="nav-wrapper right">
                        <form>
                            <div className="input-field">
                            <input id="search" type="search" required />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            </div>
                        </form>
                        </div>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
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
