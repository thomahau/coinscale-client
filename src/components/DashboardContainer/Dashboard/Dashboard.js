import React from 'react';
import DateWidgetContainer from './DateWidgetContainer/DateWidgetContainer';
import CoinsTableContainer from './CoinsTableContainer/CoinsTableContainer';
import DashboardTabs from './DashboardTabs/DashboardTabs';
import Alert from './Alert/Alert';
import './Dashboard.css';

export default function Dashboard(props) {
  // If in demo account, render informative welcome message
  let demoAlert;
  if (props.demo) {
    console.log(window.screen.height);
    demoAlert = (
      <Alert type="success" className="dashboard-card">
        <h4>Welcome to Coinscale</h4>
        You are logged in as a demo user with sample data generated to show you what things might
        look like.
        <p className="mobile-help">
          Consider using your device in landscape mode for a better experience!
        </p>
      </Alert>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row dashboard-wrapper">
        <div className="seven columns">
          {demoAlert}
          <div className="row dashboard-card date-widget-card">
            <div className="card-header">
              <h4>Select date</h4>
            </div>
            <div className="card-body">
              <DateWidgetContainer />
            </div>
          </div>
          <div className="row dashboard-card main-dashboard-card">
            <DashboardTabs />
          </div>
        </div>
        <div className="five columns dashboard-card">
          <CoinsTableContainer />
        </div>
      </div>
    </div>
  );
}
