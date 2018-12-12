import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NewsCarousel from './components/Carousel';
import Charts from './components/Chart';
import TickerContainer from "./components/TickerContainer"
import { AreaChart } from "react-easy-chart";
import WordLookup from './components/WordLookup';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { AreaChart } from "react-easy-chart";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      page: "landing",
      userid: null,
      userEmail:null,
    }
    this.handlePage = this.handlePage.bind(this);
    this.handleBecameAuthed = this.handleBecameAuthed.bind(this);
    this.handleUserUnAuthed = this.handleUserUnAuthed.bind(this);
  }
  handlePage(e) {
    this.setState({ page: e.page })
  }
  handleBecameAuthed(user){
    const {uid, email} = user
    this.setState({userid:uid, userEmail:email});
  }
  handleUserUnAuthed(){
    this.setState({userid: null, userEmail:null});  
  }
  render() {
    switch (this.state.page) {
      case "landing":
        return (
          <div>
            <NavBar userEmail={this.state.userEmail} handleUserUnAuthed={this.handleUserUnAuthed} userid={this.state.userid} handleBecameAuthed={this.handleBecameAuthed} handlePage={this.handlePage} />

            <div className="container">
              <div className="divFlex">
                
                  <div className="alignRight" xs={6} m={6}>
                    <NewsCarousel />
                   
                    <Charts />
                  </div>
                
              </div>
            </div>

            <br></br>

            <div className="WordLookupContainer">
              <WordLookup />
            </div>

            < TickerContainer />
              
            <Charts />
            <div className="footerContainer">
              <Footer />
            </div>
          </div>
        );
      case "loggedin":
      case "main":
        return (
          <div>
            <NavBar userEmail={this.state.userEmail} handleUserUnAuthed={this.handleUserUnAuthed} userid={this.state.userid}  handleBecameAuthed={this.handleBecameAuthed} handlePage={this.handlePage} />
            <div className="footerContainer">
              {/* <Footer /> */}
            </div>
          </div>
        );
      default:
        break;
    }
  }
}

export default App;

