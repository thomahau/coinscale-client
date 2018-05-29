import React from 'react';
import {
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import LoginForm from './LoginForm';

export class Navigation extends React.Component {
  render() {
    let navElements;
    if (this.props.loggedIn) {
      navElements = (
        <Nav className="ml-auto" navbar>
          <NavItem className="navbar-text mr-2">{this.props.username}</NavItem>
          <NavItem>
            <Button color="success" style={{ border: '1px solid white' }}>
              Log out
            </Button>
          </NavItem>
        </Nav>
      );
    } else {
      navElements = (
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown
            nav
            inNavbar
            style={{ border: '1px solid white', borderRadius: '4px' }}
          >
            <DropdownToggle nav>Log in</DropdownToggle>
            <DropdownMenu right>
              <LoginForm />
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      );
    }

    return (
      <Navbar className="navbar-dark bg-dark" expand="xs">
        <NavbarBrand href="/">coinscale</NavbarBrand>
        {navElements}
      </Navbar>
    );
  }
}

export default Navigation;
