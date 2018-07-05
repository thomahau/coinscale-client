import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import Input from '../../../../Input/Input';
import Button from '../../../../Button/Button';
import { login } from '../../../../../actions/auth';
import { required, nonEmpty } from '../../../../../validators';
import './LoginForm.css';

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
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label htmlFor="username">Username</label>
        <Field
          component={Input}
          type="text"
          name="username"
          className="u-full-width"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          className="u-full-width"
          validate={[required, nonEmpty]}
        />
        {error}
        <Button primary block>
          Log in
        </Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
