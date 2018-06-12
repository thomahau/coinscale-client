import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';

const passwordLength = length({ min: 8, max: 72 });
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password } = values;
    const user = { username, password };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <Form
        className="register-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <FormGroup>
          <Label for="registerUsername">Username</Label>
          <Input
            tag={Field}
            component="input"
            type="text"
            name="username"
            id="registerUsername"
            bsSize="sm"
            validate={[required, nonEmpty, isTrimmed]}
          />
        </FormGroup>
        <FormGroup>
          <Label for="registerPassword">Password</Label>
          <Input
            tag={Field}
            component="input"
            type="password"
            name="password"
            id="registerPassword"
            bsSize="sm"
            validate={[required, passwordLength, isTrimmed]}
          />
        </FormGroup>
        <FormGroup>
          <Label for="passwordConfirm">Confirm password</Label>
          <Input
            tag={Field}
            component="input"
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            bsSize="sm"
            validate={[required, nonEmpty, matchesPassword]}
          />
        </FormGroup>
        <Button color="success" block>
          Create account
        </Button>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) => dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);

// export default Registration;

// return (
//   <Form className="register-form">
//     <FormGroup>
//       <Label for="registerUsername">Username</Label>
//       <Input type="text" name="username" id="registerUsername" bsSize="sm" />
//     </FormGroup>
//     <FormGroup>
//       <Label for="registerPassword">Password</Label>
//       <Input type="password" name="password" id="registerPassword" bsSize="sm" />
//     </FormGroup>
//     <FormGroup>
//       <Label for="passwordConfirm">Confirm password</Label>
//       <Input type="password" name="passwordConfirm" id="passwordConfirm" bsSize="sm" />
//     </FormGroup>
//     <Button color="success" block>
//       Create account
//     </Button>
//   </Form>
// );
