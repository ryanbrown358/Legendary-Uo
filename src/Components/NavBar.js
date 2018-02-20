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
                    <ul id="nav-mobile" className="left ">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/UploadPictures">Upload Items</Link></li>
                        <li><Link to="/Items" >Items For Sale</Link></li>
                        <li><Link to="/" >Login</Link></li>
                        <li><Link to="/contact" >Contact Us</Link></li>
                       
                    </ul>
                  
                    </div>
                </nav>
            </div>
        );
    }
}
