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
          <NavItem eventKey={1} href="/watchlist">
          {/* <NavItem onClick={() => history.push('/watchlist')}> */}
            watchlist
          </NavItem>
          <NavItem eventKey={2} href="/">
          {/* <NavItem onClick={() => history.push('/')}> */}
            Home

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

          <NavItem className="username">
            {/* short circuit evaluation */}
            {(userEmail && userEmail.slice(0, userEmail.indexOf('@'))) || ''}


            {/* <img src="https://cdn2.iconfinder.com/data/icons/budicon-user/16/32-user_-_single-512.png" alt="user"></img> */}

          </NavItem>


        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>

);

