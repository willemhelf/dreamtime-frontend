import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DreamFeed from './DreamFeed'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  constructor() {
    super()

  }



  render() {
    return (
      <div className="App">
        <Navbar />
        <p> Dreamtime </p>
        <br />
        <br />
        <DreamFeed />
      </div>
    );
  }
}

export default App;
