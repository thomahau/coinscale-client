import React from 'react';
import Button from '../../../Button/Button';
import LoginForm from './LoginForm/LoginForm';
import './Dropdown.css';

export default class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeMenu);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu); // Causing potential problems? http://www.justincarmony.com/blog/2015/04/02/webpack-react-multiple-versions-issues/
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div>
        <Button nav login onClick={this.showMenu}>
          Log in
        </Button>

        {this.state.showMenu ? (
          <div
            className="dropdown-menu"
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            <LoginForm />
          </div>
        ) : null}
      </div>
    );
  }
}
