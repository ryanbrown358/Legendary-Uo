import React, { Component } from 'react';


export default class ViewItems extends Component{
    render(){
        let card ={
            padding: '10px'
        }
        return(
            <div>
                         <div className="row" style={card}>
                            <div className="col s1 m7 l2" >
                            <div className="card" >
                                <div className="card-image">
                                <img src="https://i.imgur.com/fglN8mc.png"/>
                                <span className="card-title" stlye={card}></span>
                                </div>
                                <div className="card-content">
                                <p>Discription goes here</p>
                                <button type="button" value="submit">Buy</button>
                                </div>
                                <div className="card-action">
                                {/* <a href="#">This is a link</a> */}
                                </div>

                            </div>
                            </div>
                            

                            <div className="row" style={card}>
                            <div className="col s1 m7 l2" >
                            <div className="card" >
                                <div className="card-image">
                                <img src="https://i.imgur.com/fglN8mc.png"/>
                                <span className="card-title" stlye={card}></span>
                                </div>
                                <div className="card-content">
                                <p>Discription goes here</p>
                                <button type="button" value="submit">Buy</button>
                                </div>
                                <div className="card-action">
                                {/* <a href="#">This is a link</a> */}
                                </div>

                            </div>
                            </div>
                           
                        </div>

                </div>
            </div>
        );
    }
}