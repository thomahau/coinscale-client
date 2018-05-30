import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginForm = () => (
  <Form className="login-form px-3 py-3">
    <FormGroup>
      <Label for="username">Username</Label>
      <Input type="text" name="username" id="username" bsSize="sm" />
    </FormGroup>
    <FormGroup>
      <Label for="password">Password</Label>
      <Input type="password" name="password" id="password" bsSize="sm" />
    </FormGroup>
    <Button color="success" block>
      Log in
    </Button>
  </Form>
);

export default LoginForm;
