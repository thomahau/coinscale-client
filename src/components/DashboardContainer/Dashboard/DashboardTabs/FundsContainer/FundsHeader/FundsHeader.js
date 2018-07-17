import React from 'react';
import ModalLauncher from '../../../ModalLauncher/ModalLauncher';

export default function FundsHeader() {
  return (
    <div className="dashboard-header">
      <h3 className="dashboard-h3">Funds</h3>
      <ModalLauncher title="Funds">
        <ul>
          <li>
            The two tables give you an overview of your portfolio, as of the currently selected
            date.
          </li>
          <li>
            The upper table shows your available cash balance, as well as aggregated data for all
            your cryptocurrency funds combined.
          </li>
          <li>
            The lower table contains data for each of the individual cryptocurrencies you hold.
          </li>
        </ul>
      </ModalLauncher>
    </div>
  );
}
