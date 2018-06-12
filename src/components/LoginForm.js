import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Button, Form, FormGroup, FormFeedback, Label, Input } from 'reactstrap';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }

    return (
      <Form
        className="login-form px-3 py-3"
        onSubmit={this.props.handleSubmit((values) => {
          this.onSubmit(values);
        })}
      >
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            tag={Field}
            component="input"
            type="text"
            name="username"
            id="username"
            bsSize="sm"
            validate={[required, nonEmpty]}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            tag={Field}
            component="input"
            type="password"
            name="password"
            id="password"
            bsSize="sm"
            validate={[required, nonEmpty]}
          />
        </FormGroup>
        <Button color="success" block>
          Log in
        </Button>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
