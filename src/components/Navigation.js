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
import LoginForm from './LoginForm';

export default class Navigation extends React.Component {
  render() {
    // TODO: Conditional (ternary) operator
    let navElements;
    if (this.props.loggedIn) {
      navElements = (
        <Nav className="ml-auto" navbar>
          <NavItem className="navbar-text mt-1">{this.props.username}</NavItem>
          <NavItem>
            <NavLink href="#" className="active">
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
            <DropdownMenu right style={{ width: '200px' }}>
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

// export default Navigation;
// style={{ border: '1px solid white', borderRadius: '4px' }}
