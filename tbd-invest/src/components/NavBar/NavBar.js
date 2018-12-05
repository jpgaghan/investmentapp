import React from "react";
import './Nav.css';
import Login from "../Login/index";
import {Navbar,Nav,NavItem} from "react-bootstrap";
import SignUp from '../SignUp/SignUpView';

//login modal
export const NavBar = ({handlePage}) => (
    <div>
<<<<<<< HEAD
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
=======
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
            <SignUp />
        
        </Nav>
      </Navbar.Collapse>
    </Navbar>
>>>>>>> 1c51ba0fc49f366303a69c0e679f906310b1f785
  </div>

);

