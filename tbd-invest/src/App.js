import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import firebase from './firebase.js';
import NewsCarousel from './components/Carousel';
import { BrowserRouter as Router, Route } from "react-router-dom";



class App extends Component {
  state = {
    page: "landing"
  }
  render() {

  // switch (page) {
  //   case page === "landing":

    return (

      <div>
        <NavBar />

        <NewsCarousel />
        
          <div>
            <Footer />
          </div>
 
      </div>
      );
    //   break;
    // case page === "main":
    //   return (
    
    //     <div>
    //       <NavBar />
        
    //       <div>
    //         <Footer />
    //       </div>
    //     </div>
    //   );
    //   break;
    // default:
        
    //   break;
  }
  
    
  }
// }

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