import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import Login from './components/Login ';
// import firebase from './firebase.js';
import NewsCarousel from './components/Carousel';
// import Charts from './components/Chart';
// import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      page: "landing",
      userid: ""
    }
    this.handlePage = this.handlePage.bind(this)
  }
  handlePage(e){
    this.setState({page:e.page})
  }
  render() {
    switch (this.state.page) {
      case "landing":
        return (
          <div>
            <NavBar handlePage={this.handlePage}/>
            <NewsCarousel />
            {/* <Charts /> */}
            <div>
              <Footer />
            </div>
          </div>
        );
      case "loggedin":
      case "main":
        return (
          <div>
            <NavBar />
            <div>
              <Footer />
            </div>
          </div>
        );
      default:
        break;
    }
  }
}

export default App;

// const database = firebase.database();

// signIn: (email, password) => {
//   firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
//     userid = user.user.uid;
//     email = user.user.email;
//     localStorage.setItem("userid", userid);
//     $.post("/newuser", { userid, email });
//     window.location.href = "/artist"
//   }).catch(function (error) {
//     // Handle Errors here.
//     $("#error").text("Incorrect email or password")
//     $("#error").css({ "color": "red" })
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   })
// },
// createUser: (email, password) => {
//   firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
//     userid = user.user.uid;
//     email = user.user.email;
//     setState(
//       page: "main"
//     )
//     localStorage.setItem("userid", userid);
//     $.post("/newuser", { userid, email });
//     window.location.href = "/artist"
//   })
//     .catch(function (error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ...
//     });
// },