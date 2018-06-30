import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Button, Form, FormGroup } from 'reactstrap';
import FormInput from '../FormInput';
import { login } from '../../actions/auth';
import { required, nonEmpty } from '../../validators';

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <FormGroup aria-live="polite">
          <p className="text-danger">{this.props.error}</p>
        </FormGroup>
      );
    }

    return (
      <Form
        className="login-form px-3 py-3"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <FormGroup>
          <label htmlFor="username">Username</label>
          <Field
            component={FormInput}
            type="text"
            name="username"
            validate={[required, nonEmpty]}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <Field
            component={FormInput}
            type="password"
            name="password"
            validate={[required, nonEmpty]}
          />
        </FormGroup>
        {error}
        <Button color="success" disabled={this.props.submitting} block>
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
