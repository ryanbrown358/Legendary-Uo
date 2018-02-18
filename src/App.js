import React, { Component } from 'react';
import  NavBar from './Components/NavBar';
import Router from './Components/Router';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return ( 
      <div className = "App" >
      <NavBar />
      <header className = "App-header" >
      <Link to="/"><h1 className = "App-title" >Legendary Uo</h1></Link>  
      </header>
                <div className="container">
                <Router/>
                </div>
      </div>
    );
  }
}

export default App;