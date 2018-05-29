import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
// import { Field, reduxForm, focus } from 'redux-form';
import LoginForm from './LoginForm';

const Navigation = () => (
  <Navbar className="navbar-dark bg-dark" expand="xs">
    <NavbarBrand href="/">coinscale</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav>Log in</DropdownToggle>
        <DropdownMenu right>
          <LoginForm />
        </DropdownMenu>
      </UncontrolledDropdown>
      <NavItem>
        <NavLink href="#">Sign up</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;
