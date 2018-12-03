import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';

import Footer from './components/Footer';
import NewsCarousel from './components/Carousel';
import Charts from './components/Chart';


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
            <Charts />
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
