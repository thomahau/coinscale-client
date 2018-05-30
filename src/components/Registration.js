import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Registration = () => (
  <Row className="my-4">
    <Col sm="12" className="text-center">
      <h3>Create your account</h3>
    </Col>
    <Col sm="12" md={{ size: 4, offset: 4 }}>
      <Form className="register-form">
        <FormGroup>
          <Label for="registerUsername">Username</Label>
          <Input type="text" name="username" id="registerUsername" bsSize="sm" />
        </FormGroup>
        <FormGroup>
          <Label for="registerPassword">Password</Label>
          <Input type="password" name="password" id="registerPassword" bsSize="sm" />
        </FormGroup>
        <FormGroup>
          <Label for="passwordConfirm">Confirm password</Label>
          <Input type="password" name="passwordConfirm" id="passwordConfirm" bsSize="sm" />
        </FormGroup>
        <Button color="success" block>
          Create account
        </Button>
      </Form>
    </Col>
  </Row>
);

export default Registration;
