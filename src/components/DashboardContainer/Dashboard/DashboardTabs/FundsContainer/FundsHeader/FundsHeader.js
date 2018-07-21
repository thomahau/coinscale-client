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
            your cryptocurrency funds combined. The lower table contains data for each of the
            individual cryptocurrencies you hold.
          </li>
          <li>
            <strong>Cost Basis</strong> represents the original value of a holding (i.e. how much
            you spent to buy it).
          </li>
          <li>
            <strong>Unrealized P/L (Profit and Loss)</strong> is a reflection of what profit or loss
            could be realized if the coin(s) were sold at the current date.
          </li>
          <li>
            <strong>Realized P/L (Profit and Loss)</strong> refers to profit or loss on coins you
            have sold.
          </li>
        </ul>
      </ModalLauncher>
    </div>
  );
}
