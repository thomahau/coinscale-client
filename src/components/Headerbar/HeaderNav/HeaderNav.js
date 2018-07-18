import React from 'react';
import { connect } from 'react-redux';
import Button from '../../Button/Button';
import Dropdown from './Dropdown/Dropdown';
import { clearAuth } from '../../../actions/auth';
import { clearAuthToken } from '../../../local-storage';

export class HeaderNav extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // If user is logged in, render username + logout button. Otherwise, render login-dropdown
    if (this.props.loggedIn) {
      return (
        <div className="u-pull-right">
          <span className="nav-username">{this.props.username}</span>
          <Button nav logout onClick={() => this.logOut()}>
            Log out
          </Button>
        </div>
      );
    }
    return (
      <div className="u-pull-right">
        <Dropdown />
      </div>
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

export default connect(mapStateToProps)(HeaderNav);
