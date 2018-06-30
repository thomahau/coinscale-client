import React from 'react';
import LoginForm from './LoginForm';

export default class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
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
        <button onClick={this.showMenu}>Log in</button>

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
