import React from "react";
import './Nav.css';
import Login from "../Login/index";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import SignUp from '../SignUp/index';
// import { FaUserCircle } from 'react-icons/fa';


//login modal
export const NavBar = ({ handlePage, handleBecameAuthed, userid, handleUserUnAuthed, userEmail }) => (
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
          <NavItem eventKey={1} href="#">
            About
          </NavItem>
          <NavItem eventKey={2} href="#">
            Contact
            </NavItem>

          <Login
            handleUserUnAuthed={handleUserUnAuthed}
            userid={userid}
            handlePage={handlePage}
            handleBecameAuthed={handleBecameAuthed}
          />
          <SignUp
            handleUserUnAuthed={handleUserUnAuthed}
            userid={userid}
            handlePage={handlePage}
            handleBecameAuthed
          />

          <NavItem className="username">
            {/* short circuit evaluation */}
            {(userEmail && userEmail.slice(0, userEmail.indexOf('@'))) || ''}
<<<<<<< HEAD
          
            {/* <FaUserCircle /> */}
=======

            <FaUserCircle />
>>>>>>> fa968490c79cc5bfbc54ebbf7a0f721b602dfaa8

          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>

);

