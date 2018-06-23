import React from 'react';
import { connect } from 'react-redux';
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
import LoginForm from './LoginForm';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

export class Navigation extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let navElements;
    if (this.props.loggedIn) {
      navElements = (
        <Nav className="ml-auto" navbar>
          <NavItem className="navbar-text mt-1">{this.props.username}</NavItem>
          <NavItem>
            <NavLink href="#" className="active" onClick={() => this.logOut()}>
              Log out
            </NavLink>
          </NavItem>
        </Nav>
      );
    } else {
      navElements = (
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle className="active" caret nav>
              Log in
            </DropdownToggle>
            <DropdownMenu right>
              <LoginForm />
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      );
    }

    return (
      <Navbar className="navbar-dark bg-primary" expand="xs">
        <NavbarBrand href="/">coinscale</NavbarBrand>
        {navElements}
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.auth.currentUser !== null) {
    return {
      loggedIn: true,
      username: state.auth.currentUser.username
    };
  }
  return { loggedIn: false };
};

export default connect(mapStateToProps)(Navigation);
