import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DateWidgetContainer from './DateWidgetContainer/DateWidgetContainer';
import FundsContainer from './FundsContainer/FundsContainer';
import TradeHistoryContainer from './TradeHistoryContainer/TradeHistoryContainer';
import TradeFormContainer from './TradeFormContainer/TradeFormContainer';
import CoinsTableContainer from './CoinsTableContainer/CoinsTableContainer';
import DashboardNav from './DashboardNav/DashboardNav';
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
            <div className="dashboard-nav-header">
              <DashboardNav />
            </div>
            <div className="card-body">
              <Switch>
                <Route exact path="/dashboard/funds" component={FundsContainer} />
                <Route exact path="/dashboard/history" component={TradeHistoryContainer} />
                <Route exact path="/dashboard/trade" component={TradeFormContainer} />
                <Route path="/dashboard" component={FundsContainer} />
              </Switch>
            </div>
          </div>
        </div>
        <div className="five columns dashboard-card">
          <div className="card-header">
            <h4>Cryptocurrency Prices</h4>
          </div>
          <div className="card-body">
            <CoinsTableContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
