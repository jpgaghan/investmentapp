import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';

import Footer from './components/Footer';
import NewsCarousel from './components/Carousel';

class App extends Component {
  render() {
    return (

      <div>
        <NavBar />

        <NewsCarousel />
      
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
