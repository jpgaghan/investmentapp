import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';

import Footer from './components/Footer';

class App extends Component {
  render() {
    return (

      <div>
        <NavBar />
        <div>
          <Login />
        </div>
        
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
