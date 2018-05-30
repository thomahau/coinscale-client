import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import Dashboard from '../containers/Dashboard';

const App = () => (
  <div>
    <Navigation loggedIn username="Satoshi Nakamoto" />
    {/* <Navigation /> */}
    <Route exact path="/" component={LandingPage} />
    <Route path="/dashboard" component={Dashboard} />
  </div>
);

export default App;

// import React from 'react';
// import {connect} from 'react-redux';
// import {Route, withRouter} from 'react-router-dom';

// import NavBar from './NavBar';
// import LandingPage from './LandingPage';
// import LoginForm from './LoginForm';
// import {refreshAuthToken} from './actions/auth';

// export class App extends React.Component {
//   componentDidUpdate(prevProps) {
//     if (!prevProps.loggedIn && this.props.loggedIn) {
//       // When user is logged in, refresh the auth token periodically
//       this.startPeriodicRefresh();
//     } else if (prevProps.loggedIn && !this.props.loggedIn) {
//       // Stop refreshing when user logs out
//       this.stopPeriodicRefresh();
//     }
//   }

//   componentWillUnmount() {
//     this.stopPeriodicRefresh();
//   }

//   startPeriodicRefresh() {
//     this.refreshInterval = setInterval(
//       () => this.props.dispatch(refreshAuthToken()),
//       60 * 60 * 1000 // One hour
//     );
//   }

//   stopPeriodicRefresh() {
//     if (!this.refreshInterval) {
//       return;
//     }

//     clearInterval(this.refreshInterval);
//   }

//   render() {
//     return (
//       <div className="app">
//         <NavBar />
//         <Route exact path="/" component={LandingPage} />
//         <Route exact path="/dashboard" component={Dashboard} />
//         <Route exact path="/login" component={LoginForm} />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   hasAuthToken: state.auth.authToken !== null,
//   loggedIn: state.auth.currentUser !== null
// });

// export default withRouter(connect(mapStateToProps)(App));
