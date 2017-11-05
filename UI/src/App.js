import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import {FormLogin} from './components/FormLogin.js';
import {FormSearch} from './components/FormSearch.js';
import {Home} from './components/Home.js';
import {Dashboard} from './components/Dashboard.js';

//import './utilities/logInAndRouting.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
          <a href="/login">login</a> : 
          <a href="/search">search</a> : 
          <a href="/dashboard">dashboard</a> : 
        </div>
        <div className="paddedBody">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={FormLogin} />
          <Route exact path="/search" component={FormSearch} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;

