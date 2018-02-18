import React, { Component } from 'react';



export default class AddPicture extends Component{
    render(){
        return(
            <div>
                <form action="POST">
                <div className="file-field input-field">
                <div className="btn">
                <span>File</span>
                <input type="file" multiple/>
                </div>
                 <div className="file-path-wrapper">
                <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
                </div>
                </div>
            </form>
            </div>
        );
    }
}
