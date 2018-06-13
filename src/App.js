import React, { Component } from 'react';
import './App.css';
import DreamContainer from './DreamContainer'
import Navbar from './Navbar'
import NewDream from './NewDream'
import DreamShow from './DreamShow'
import DreamEdit from "./DreamEdit"
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props)

  }

  

  render() {
    return (
      <div className="App">
      <h1 className="header">Dreamtime ☾</h1>
        <Navbar />
        <Route exact path="/new" component={NewDream}/>
        <Route exact path="/edit/:id" component={DreamEdit}/>
        
      <Route path='/dreams/:id' component={DreamShow} />
        <Route exact path="/" component={DreamContainer} />
      </div>
    );
  }
}

export default App;
