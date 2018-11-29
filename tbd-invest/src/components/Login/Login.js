import React from "react";
import './Login.css';
import {Modal,Button} from "react-bootstrap";

export const Login = props => (

    <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
  
      <Modal.Body>Need to implement email login line</Modal.Body>
  
      <Modal.Footer>
        <Button>New to TBD? Sign Up</Button>
        <Button bsStyle="primary">Login</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>

);