import React from 'react';
import './SignUpView.css';
import { Modal, Button, Col, FormGroup, Checkbox, FormControl, Form, ControlLabel } from "react-bootstrap";

const SigninComponent = ({
  onSubmit,
  show,
  handleHide,
  handleLogin,
  handleusernameChange,
  handlepasswordChange,
  handleLogout,
  username,
  password,
  userid
 }) => {
   return (
     <li className="signin-component" >
       <Button
         bsStyle="primary"
         bsSize="large"
        //  onClick={() => handleHide({ show: true })}
         onClick={() => !userid ? handleHide({ show: true }) : handleLogout()}

       >
       {userid ? 'Logout' : 'Login'}
         Sign Up
       </Button>
       
       {
         <Modal
         show={show || false}
         onHide={handleHide}
         container={this}
         aria-labelledby="contained-modal-title"
       >
         <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title">
             Login
           </Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <Form horizontal onSubmit ={ onSubmit }>
             <FormGroup
               controlId="formHorizontalEmail"
               value={username}
               onChange={(e) => handleusernameChange(e)}>
               <Col componentClass={ControlLabel} sm={2}>
                 Email
               </Col>
               <Col sm={10}>
                 <FormControl type="email" placeholder="Email" />
               </Col>
             </FormGroup>
             <FormGroup 
               controlId="formHorizontalPassword"
               value={password}
               onChange={(e) => handlepasswordChange(e)}>
               <Col componentClass={ControlLabel} sm={2}>
                 Password
               </Col>  
               <Col sm={10}>
                 <FormControl type="password" placeholder="Password" />
               </Col>
             </FormGroup>
             <FormGroup>
               <Col smOffset={2} sm={10}>
                 <Checkbox>Remember me</Checkbox>
               </Col>
             </FormGroup>
             <FormGroup>
               <Col smOffset={2} sm={10}>
                 <Button type="submit">Sign Up</Button>
               </Col>
             </FormGroup>
           </Form>
         </Modal.Body>
         <Modal.Footer>
           <Button onClick={handleLogin}>Close</Button>
         </Modal.Footer>
       </Modal>
       }
     </li>
   );
 };

 export default SigninComponent;