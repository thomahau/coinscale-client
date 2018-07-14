import React from 'react';
import DateWidgetContainer from './DateWidgetContainer/DateWidgetContainer';
import CoinsTableContainer from './CoinsTableContainer/CoinsTableContainer';
import DashboardTabs from './DashboardTabs/DashboardTabs';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row dashboard-wrapper">
        <div className="seven columns">
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
