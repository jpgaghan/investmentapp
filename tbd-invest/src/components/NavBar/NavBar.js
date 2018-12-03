import React from "react";
import './Nav.css';
import Login from "../Login/Login";
import {Navbar,Nav,NavItem} from "react-bootstrap";

//login modal
export const NavBar = props => (

    <div>
    <Navbar ClassName="navStyle" inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">TBD App</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
         About
        </NavItem>
        <NavItem eventKey={2} href="#">
         Contact
        </NavItem>
          <Login />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>

);