import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import {createLoginForm, LogOff} from './components/LoginForm.js';
import {FormSearch} from './components/FormSearch.js';
import {Home} from './components/Home.js';
import {Dashboard} from './components/Dashboard.js';
// import {AppLogout} from './components/logoutProcess.js';

// import './utilities/logInAndRouting.js';

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
          <Link to="/logout">logout</Link>

        </div>
        <div className="paddedBody">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={createLoginForm} />
          <Route exact path="/search" component={FormSearch} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/logout" component={LogOff} />
          <Route exact path="/home" render={() => (isLoggedIn() ? (<Redirect to="/dashboard"/>) : (<Redirect to="/login"/>))}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;


export function isLoggedIn(){
  var l = sessionStorage.getItem('username');
  if (l){
    alert(l);
    if ( l.length>0){
      return true;
      }
  }

  return false;
}
