import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import './App.css';
import LandingPage from './pages/LandingPage';
import Watchlist from './pages/Watchlist'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createHashHistory } from 'history'

import { FaUserCircle } from 'react-icons/fa';
// import { BrowserRouter as Router, Route } from "react-router-dom";




class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      page: "landing",
      userid: null,
      userEmail:null,
    }
    this.history = createHashHistory({
      hashType: 'noslash' // Omit the leading slash
    })
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
    localStorage.setItem('userid', null);
    localStorage.setItem('logstatus', null);
    localStorage.setItem('username', '');
    localStorage.setItem('userEmail', '');
  }
  
  componentDidMount() {
    if (localStorage.getItem('userid') !== null) {
      this.setState({userid: localStorage.getItem('userid')})
      this.setState({userEmail: localStorage.getItem('userEmail')})
    }
  }
  render() {
    return (
      <div>
            <NavBar
              state={this.state}
              userEmail={this.state.userEmail}
              handleUserUnAuthed={this.handleUserUnAuthed} 
              userid={this.state.userid}
              handleBecameAuthed={this.handleBecameAuthed}
              handlePage={this.handlePage}
              history={this.history}
            />
            <Router>
              <Switch>
                <Route
                  exact
                  path="/watchlist"
                  render={(props) => <Watchlist {...this.state} {...props}/>}
                />
                <Route
                  exact
                  path="/"
                  render={(props) => <LandingPage {...this.state} {...props}/>}
                />
                
              </Switch>
            </Router>

            <div className="footerContainer">
              <Footer />
            </div>
          </div>
    )
  
  }
}

export default App;

