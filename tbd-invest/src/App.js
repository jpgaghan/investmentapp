import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer';
import NewsCarousel from './components/Carousel';
import Chart from './components/Chart';


class App extends Component {
  state = {
    page: "landing"
  }
  render() {
    switch (this.state.page) {
      case "landing":
        return (
          <div>
            <NavBar />
            <NewsCarousel />
            <div>
              <Footer />
            </div>
          </div>
        );
      case "main":
        return (
          <div>
            <NavBar />
            <Chart />
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
