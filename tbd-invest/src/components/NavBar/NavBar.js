import React from "react";
import './Nav.css';
import Login from "../Login/Login";
import {Navbar,Nav,NavItem} from "react-bootstrap";
import SignUp from '../SignUp/SignUpView';

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
    <Navbar.Collapse className="collapseNav">
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
         ABOUT
        </NavItem>
        <NavItem eventKey={2} href="#">
         CONTACT
        </NavItem>
          <Login />
          <SignUp />
      
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>

);

