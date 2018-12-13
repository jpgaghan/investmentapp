import React from "react";
import './Nav.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Login/index";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import SignUp from '../SignUp/index';
import Books from "../../pages/Watchlist"
import { FaUserCircle } from 'react-icons/fa';


//login modal
export const NavBar = ({ handlePage, handleBecameAuthed, userid, handleUserUnAuthed, userEmail, history }) => (
  <div>
    <Navbar className="navStyle" inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a className="brandName" href="#brand">TBD App</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse className="navList">
        <Nav pullRight>
          <NavItem eventKey={2} href="/">
            {/* <NavItem onClick={() => history.push('/')}> */}
            Home
            </NavItem>
          <NavItem eventKey={1} href="/watchlist">
            {/* <NavItem onClick={() => history.push('/watchlist')}> */}
            Watchlist
          </NavItem>


          <NavItem>
            <Login
              handleUserUnAuthed={handleUserUnAuthed}
              userid={userid}
              handlePage={handlePage}
              handleBecameAuthed={handleBecameAuthed}
            />
          </NavItem>
          <NavItem>
            <SignUp
              handleUserUnAuthed={handleUserUnAuthed}
              userid={userid}
              handlePage={handlePage}
              handleBecameAuthed={handleBecameAuthed}
            />
          </NavItem>

          <NavItem>
            <div className="username">
          
            {/* short circuit evaluation */}
            {(userEmail && userEmail.slice(0, userEmail.indexOf('@'))) || ''}
            {/* <FaUserCircle /> */}
            </div>


          </NavItem>


        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>

);

