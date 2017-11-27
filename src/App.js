import React, { Component } from 'react';
import './App.css';
import DreamFeed from './DreamFeed'
import Navbar from './Navbar'
import NewDream from './NewDream'
import DreamShow from './DreamShow'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  constructor() {
    super()

  }



  render() {
    return (
      <div className="App">
      <h1 className="header"> Dreamtime ☾</h1>
        <Navbar />
        <Route exact path="/new" component={NewDream}/>
        <Route exact path="/" component={DreamFeed} />
        <Route path='/dreams/:id' component={DreamShow} />
      </div>
    );
  }
}

export default App;
