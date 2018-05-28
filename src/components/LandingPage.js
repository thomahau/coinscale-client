import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';
// import { Field, reduxForm, focus } from 'redux-form';
// import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
// import Footer from './Footer';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar expand="xs" color="primary">
          <NavbarBrand href="/">coinscale</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>Log in</DropdownToggle>
              <DropdownMenu right>
                <LoginForm />
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/register">Sign up</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
