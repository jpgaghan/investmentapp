import React, { Component } from 'react';
import TickerCard from "./components/TickerCard";

// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import Login from './components/Login ';
// import firebase from './firebase.js';
import NewsCarousel from './components/Carousel';
import Charts from './components/Chart';
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
            <br></br>
            <div className="tickerContainer">
              <TickerCard />
              <TickerCard />
              <TickerCard />
              <TickerCard />
              <TickerCard />
              <TickerCard />
              <TickerCard />
              <TickerCard />
              <TickerCard />
              <TickerCard />
              <TickerCard />
              <TickerCard />
              <TickerCard />
              <TickerCard />
              <TickerCard />
              <TickerCard />
              <TickerCard />
              <TickerCard />
            </div>

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
            <NavBar handlePage={this.handlePage}/>
            <div className="footerContainer">
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

