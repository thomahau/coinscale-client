import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { registerUser } from '../../../actions/users';
import { login } from '../../../actions/auth';
import { required, nonEmpty, matches, length, isTrimmed } from '../../../validators';
import './RegistrationForm.css';

const passwordLength = length({ min: 8, max: 72 });
const matchesPassword = matches('registerPassword');

export class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingDemo: false
    };
  }

  onSubmit(values) {
    const { registerUsername: username, registerPassword: password } = values;
    const user = { username, password };

    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)))
      .then(() => window.scrollTo(0, 0));
  }

  handleDemo(event) {
    // Log in with demo account credentials
    event.preventDefault();
    this.setState({ loadingDemo: true });
    return this.props.dispatch(login('demo', 'password')).then(() => window.scrollTo(0, 0));
  }

  render() {
    return (
      <div className="container">
        <h2>Create your account</h2>
        <div className="row">
          <div className="form-wrapper">
            <form
              className="register-form"
              onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
            >
              <label htmlFor="registerUsername">Username</label>
              <Field
                component={Input}
                type="text"
                name="registerUsername"
                placeholder="Satoshi Nakamoto"
                className="u-full-width"
                validate={[required, nonEmpty, isTrimmed]}
              />
              <label htmlFor="registerPassword">Password</label>
              <Field
                component={Input}
                type="password"
                name="registerPassword"
                placeholder="••••••••"
                className="u-full-width"
                validate={[required, passwordLength, isTrimmed]}
              />
              <label htmlFor="passwordConfirm">Confirm password</label>
              <Field
                component={Input}
                type="password"
                name="passwordConfirm"
                placeholder="••••••••"
                className="u-full-width"
                validate={[required, nonEmpty, matchesPassword]}
              />
              <Button
                primary
                block
                type="submit"
                disabled={this.props.submitting || this.state.loadingDemo}
              >
                {this.props.submitting ? 'Logging in...' : 'Create account'}
              </Button>
              <Button
                block
                className="demo-btn"
                disabled={this.state.loadingDemo || this.props.submitting}
                onClick={event => this.handleDemo(event)}
              >
                {this.state.loadingDemo ? 'Logging in...' : 'View demo'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) => dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
