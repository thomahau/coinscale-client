import React from 'react';
import ModalLauncher from '../../ModalLauncher/ModalLauncher';

export default function TradeHistoryHeader() {
  return (
    <div className="dashboard-header">
      <h3 className="dashboard-h3">History</h3>
      <ModalLauncher title="Trade History">
        <ul>
          <li>The table gives you an overview of all your past buy and sell transactions.</li>
          <li>You may sort by any column, or filter the table using the input boxes.</li>
        </ul>
      </ModalLauncher>
    </div>
  );
}
