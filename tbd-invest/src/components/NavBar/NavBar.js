import React from "react";
import './Nav.css';
import Login from "../Login/Login";
import {Navbar,Nav,NavItem} from "react-bootstrap";

//login modal
export const NavBar = props => (

    <div>
    <Navbar ClassName="navStyle navTitle" inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand" className="brandName">TBD APP</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
         ABOUT
        </NavItem>
        <NavItem eventKey={2} href="#">
         CONTACT
        </NavItem>
          <Login />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>

);