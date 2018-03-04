import React, { Component } from 'react';
import  NavBar from './Components/NavBar';
import TopDeals from './Components/TopDeals';
import Home from './Components/Home';
import Router from './Components/Router';
import Footer from './Components/Footer';
import {Link} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return ( 
      <div className = "App bg-poster" >
      
      <header className = "App-header poster black" >
                <Link to="/"><h1 className="App-title" ></h1></Link>
           
            
      </header>
      <NavBar />
      
                <div className="container">
                <Router/>
                </div>
     
          <TopDeals/>
        <Footer/>
      </div>
    );
  }
}

export default App;