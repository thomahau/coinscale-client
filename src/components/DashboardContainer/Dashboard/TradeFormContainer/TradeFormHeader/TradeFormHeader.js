import React from 'react';
import ModalLauncher from '../../ModalLauncher/ModalLauncher';

export default function TradeFormHeader() {
  return (
    <div className="dashboard-header">
      <h3 className="dashboard-h3">Trade</h3>
      <ModalLauncher title="Trade">
        <ul>
          <li>Use the trade form to place buy or sell orders.</li>
          <li>
            Find the cryptocurrency you would like to trade in the table of cryptocurrency prices
            and click its symbol to select it.
          </li>
          <li>Select your desired trading date with the range slider.</li>
        </ul>
      </ModalLauncher>
    </div>
  );
}
