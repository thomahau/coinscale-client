import React from 'react';
import ViewOption from './ViewOption/ViewOption';
import { NavLink } from 'react-router-dom';
import './DashboardNav.css';

export default function DashboardNav() {
  return (
    <nav className="dashboard-nav">
      <ViewOption destination="trade" highlighted />
      <ViewOption destination="history" />
      <ViewOption destination="funds" />
      {/* <div className="view-option">
        <NavLink to="/dashboard/trade" activeClassName="active">
          Trade
        </NavLink>
      </div>
      <div className="view-option">
        <NavLink to="/dashboard/history" activeClassName="active">
          History
        </NavLink>
      </div>
      <div className="view-option">
        <NavLink to="/dashboard/funds" activeClassName="active">
          Funds
        </NavLink>
      </div> */}
    </nav>
  );
}
