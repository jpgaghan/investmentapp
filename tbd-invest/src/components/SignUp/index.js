import React, { Component } from "react";
import firebase from '../../firebase';
import SigninComponent from './SignUpView'


export default class SignUp extends Component {

  constructor(props, context) {
   super(props, context);
 
   this.handleHide = this.handleHide.bind(this);
   this.handlepasswordChange = this.handlepasswordChange.bind(this);
   this.handleusernameChange = this.handleusernameChange.bind(this);
   this.handleLogin = this.handleLogin.bind(this);
   this.handleLogout = this.handleLogout.bind(this);
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

   const user = firebase
    .auth()
    .createUserWithEmailAndPassword(username, password).then(res => {
      this.props.handleBecameAuthed(res.user);
      this.handleHide({show: false});
      this.setState({logstatus: true})
      this.props.handlePage({page:"main"})
    }).catch (error => alert(error));
  };

handleLogout() {
  firebase
  .auth()
  .signOut().then(res => {
    console.log("here")
  //updating status is app.js to read main and pass userID to the status 
  this.props.handleUserUnAuthed();
  this.handleHide({show: false});
  this.setState({logstatus: false})
  this.props.handlePage({page:"landing"})
  }).catch (error => alert(error))
}
 render() {

          return !this.props.userid ? (<SigninComponent
          {...this.state}
          onSubmit={this.handleLogin} 
          handleChange={this.handleChange}
          handleHide={this.handleHide} 
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          handlepasswordChange={this.handlepasswordChange}
          handleusernameChange={this.handleusernameChange}
          handleLogstatus={this.handleLogstatus}

        />) : null;
 }
};