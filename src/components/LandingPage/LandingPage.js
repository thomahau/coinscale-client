import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Jumbotron from './Jumbotron';
import FeatureCards from './FeatureCards';
import RegistrationForm from './RegistrationForm';
// import Footer from './Footer';
import './LandingPage.css';

export class LandingPage extends React.Component {
  scrollToSignup() {
    const form = document.getElementsByClassName('register-form')[0];
    form.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    // If user is logged in, redirect straight to dashboard
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard/funds" />;
    }

    return (
      <div className="landing-page-wrapper">
        <Jumbotron onClick={this.scrollToSignup} />
        <FeatureCards />
        <div className="container">
          <div className="row">
            <h2>Create your account</h2>
            <RegistrationForm />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
