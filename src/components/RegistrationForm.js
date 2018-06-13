import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Button, Form, FormGroup } from 'reactstrap';
import FormInput from './FormInput';
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
          <label htmlFor="registerUsername">Username</label>
          <Field
            component={FormInput}
            type="text"
            name="username"
            validate={[required, nonEmpty, isTrimmed]}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <Field
            component={FormInput}
            type="password"
            name="password"
            validate={[required, passwordLength, isTrimmed]}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="passwordConfirm">Confirm password</label>
          <Field
            component={FormInput}
            type="password"
            name="passwordConfirm"
            validate={[required, nonEmpty, matchesPassword]}
          />
        </FormGroup>
        <Button type="submit" color="success" disabled={this.props.submitting} block>
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

// import React from 'react';
// import { Button, Form, FormGroup, FormFeedback, Label, Input } from 'reactstrap';
// import { registerUser } from '../actions/users';
// import { login } from '../actions/auth';
// import { required, nonEmpty, matches, length, isTrimmed } from '../validators';

// const passwordLength = length({ min: 8, max: 72 });
// const matchesPassword = matches('password');

// export default class RegistrationForm extends React.Component {
//   onSubmit(values) {
//     const { username, password } = values;
//     const user = { username, password };
//     return this.props
//       .dispatch(registerUser(user))
//       .then(() => this.props.dispatch(login(username, password)));
//   }

//   render() {
//     return (
//       <Form className="register-form" onSubmit={values => this.onSubmit(values)}>
//         <FormGroup>
//           <Label for="registerUsername">Username</Label>
//           <Input type="text" name="username" id="registerUsername" bsSize="sm" />
//           <FormFeedback />
//         </FormGroup>
//         <FormGroup>
//           <Label for="registerPassword">Password</Label>
//           <Input type="password" name="password" id="registerPassword" bsSize="sm" />
//           <FormFeedback />
//         </FormGroup>
//         <FormGroup>
//           <Label for="passwordConfirm">Confirm password</Label>
//           <Input type="password" name="passwordConfirm" id="passwordConfirm" bsSize="sm" />
//           <FormFeedback />
//         </FormGroup>
//         <Button color="success" block>
//           Create account
//         </Button>
//       </Form>
//     );
//   }
// }
