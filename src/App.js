import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DreamFeed from './DreamFeed'
import Navbar from './Navbar'
import NewDream from './NewDream'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  constructor() {
    super()

  }



  render() {
    return (
      <div className="App">
      <h1> Dreamtime </h1>
        <Navbar />
        <Route exact path="/new" component={NewDream}/>
        <Route exact path="/" component={DreamFeed} />
      </div>
    );
  }
}

export default App;
