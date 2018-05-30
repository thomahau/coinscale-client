import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import {Provider} from 'react-redux';
// import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './theme.min.css';
import './lux-theme.min.css';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
