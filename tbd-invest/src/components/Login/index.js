import React, { Component } from "react";
import firebase from '../../firebase';
import LoginComponent from './Login'


export default class Login extends Component {

  constructor(props, context) {
   super(props, context);
 
   this.handleHide = this.handleHide.bind(this);
   this.handlepasswordChange = this.handlepasswordChange.bind(this);
   this.handleusernameChange = this.handleusernameChange.bind(this);
   this.handleLogin = this.handleLogin.bind(this);
   this.state = {
    show: false,
    username: '',
    password: ''
   };
  }
  handleusernameChange(e) {
    console.log(e.target.value)
    this.setState({ username: e.target.value });
  }
  handlepasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handleHide(e) {
    this.setState({ show: e.show });
  }

 handleLogin(event){
  event.preventDefault();
  const { username, password } = this.state;
  console.log(username, password)
  try {
   const user = firebase
    .auth()
    .signInWithEmailAndPassword(username, password);
    //updating status is app.js to read main and pass userID to the status 
    this.handleHide({show: false});
    this.props.handlePage({page:"main"})
  } catch (error) {
   alert(error);
  }
 };

 render() {
  return <LoginComponent
          {...this.state}
          onSubmit={this.handleLogin} 
          handleChange={this.handleChange}
          handleHide={this.handleHide} 
          handleLogin={this.handleLogin}
          handlepasswordChange={this.handlepasswordChange}
          handleusernameChange={this.handleusernameChange}
        />;
 }
};