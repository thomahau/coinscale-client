import React from 'react';
import { connect } from 'react-redux';
import Dropdown from './Dropdown';
import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';

export class NavbarElements extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className="u-pull-right">
          <span>{this.props.username}</span>
          <button onClick={() => this.logOut()}>Log out</button>
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

export default connect(mapStateToProps)(NavbarElements);
