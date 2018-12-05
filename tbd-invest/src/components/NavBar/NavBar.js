import React from "react";
import './Nav.css';
import Login from "../Login/index";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import SignUp from '../SignUp/index';

//login modal
export const NavBar = ({ handlePage }) => (
  <div>
    <Navbar className="navStyle" inverse collapseOnSelect>
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
          <Login
            handlePage={handlePage}
          />
          <SignUp
            handlePage={handlePage}
          />

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>

);

