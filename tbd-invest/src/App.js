import React, { Component } from 'react';
import TickerCard from "./components/TickerCard";

// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

import Footer from './components/Footer';
import NewsCarousel from './components/Carousel';


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

            <div>
              <Footer />
            </div>
          </div>
        );
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
