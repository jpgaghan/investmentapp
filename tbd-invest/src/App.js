import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


class App extends Component {
  state = {
    page: "landing"
  }
  render() {
  switch (page) {
    case page === "landing":
     
      return (
  
        <div>
          <NavBar />
        
          <div>
            <Footer />
          </div>
        </div>
      );
      break;
    case page === "main":
      return (
    
        <div>
          <NavBar />
        
          <div>
            <Footer />
          </div>
        </div>
      );
      break;
    default:
        
      break;
  }
  
    
  }
}

export default App;
