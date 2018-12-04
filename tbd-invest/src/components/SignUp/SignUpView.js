import React from 'react';
import './SignUpView.css';
import { Modal, Button, Col, FormGroup, Checkbox, FormControl, Form, ControlLabel } from "react-bootstrap";

export default class SignUpView extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <li className="presentation" >
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true })}
        >
          Sign Up
            </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Sign Up
                </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
    </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
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
                  <Button type="submit">Create Account</Button>
                </Col>
              </FormGroup>
            </Form>;

            </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </li>
    );
  }

};
