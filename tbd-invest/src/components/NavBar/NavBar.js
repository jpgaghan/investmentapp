import React from "react";
import './Nav.css';
import Login from "../Login/index";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import SignUp from '../SignUp/index';
import { FaUserCircle } from 'react-icons/fa';


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

