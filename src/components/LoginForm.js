import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class LoginForm extends React.Component {
  render() {
    return (
      <Form className="px-3 py-3">
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" bsSize="sm" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" bsSize="sm" />
        </FormGroup>
        <Button color="success" size="sm" block>
          Log in
        </Button>
      </Form>
    );
  }
}
