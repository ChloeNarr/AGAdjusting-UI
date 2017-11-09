/*export function FormLogin(props){
  return "this will be the form :: but i want to figure out how to do it right - again - a couple text boxes and submit button";
}
*/

import React, { Component, PropTypes } from 'react';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

export function createLoginForm(){
	return new AGLoginForm();
}

export function LogOff(){
	return new AGLogoutAction();
}


class AGLoginForm extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	userName: '',
    	password: ''};

    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChanged(event) {
  	const target = event.target;
  	const name = target.name;
    this.setState({[name]: target.value});
  }

	handleSubmit(event) {
	    alert('A name was submitted: ' + this.state.userName);
	    alert('A password was submitted: ' + this.state.password);
	    event.preventDefault();

	    // now validate the username and password
	    if ( (this.state.userName=="a") && (this.state.password=="b")){
	    	// if valid - set session & redirect to dashboard	
	    	alert('valid');
	    	sessionStorage.setItem('username', this.state.userName);

	    	this.props.history.push("/");
	    }
	    else{
	    	// if not valid - give error
	    	alert('invalid');
	    }

  }

   render() {
      return (
      	<form onSubmit={this.handleSubmit}>
        	<label>username <input name="userName" type="text" value={this.state.userName} onChange={this.handleInputChanged} /></label>
        	<br />
        	<label>password <input name="password" type="password" value={this.state.password} onChange={this.handleInputChanged} /></label>
        	<br />
        	<input type="submit" value="Submit" />
      	</form>
      	);
   }  
}

class AGLogoutAction extends React.Component {

  componentDidMount(){
  	// debugger;
    sessionStorage.setItem('username', "");
    this.props.history.push("/");
  }

   render() {
      return (<h1 className="loading-text">Logging out...</h1>);
   }  
}