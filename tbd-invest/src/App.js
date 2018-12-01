import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


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
