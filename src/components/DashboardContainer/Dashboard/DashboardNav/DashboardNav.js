import React from 'react';
import { NavLink } from 'react-router-dom';
import './DashboardNav.css';

export default function DashboardNav() {
  return (
    <nav className="dashboard-nav">
      <div className="view-option">
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
      </div>
    </nav>
  );
}
