import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DateWidgetContainer from '../../../containers/DateWidgetContainer';
import CoinsTableContainer from '../../../containers/CoinsTableContainer';
import FundsContainer from '../../../containers/FundsContainer';
import TradeHistoryContainer from '../../../containers/TradeHistoryContainer';
import TradeFormContainer from '../../../containers/TradeFormContainer';
import DashboardNav from './DashboardNav/DashboardNav';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="container-fluid dashboard-wrapper">
      <div className="row">
        <div className="seven columns">
          <div className="row dashboard-card date-widget-card">
            <div className="card-header">
              <h4>Select date</h4>
            </div>
            <DateWidgetContainer />
          </div>
          <div className="row dashboard-card main-dashboard-card">
            <div className="card-header">
              <DashboardNav />
            </div>
            <Switch>
              <Route exact path="/dashboard/funds" component={FundsContainer} />
              <Route exact path="/dashboard/history" component={TradeHistoryContainer} />
              <Route exact path="/dashboard/trade" component={TradeFormContainer} />
              <Route exact path="/dashboard" component={FundsContainer} />
            </Switch>
          </div>
        </div>
        <div className="five columns dashboard-card">
          <div className="card-header">
            <h4>Cryptocurrencies</h4>
          </div>
          <CoinsTableContainer />
        </div>
      </div>
    </div>
  );
}
