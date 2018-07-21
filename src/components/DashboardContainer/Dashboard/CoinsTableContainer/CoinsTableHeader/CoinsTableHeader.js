import React from 'react';
import ModalLauncher from '../../ModalLauncher/ModalLauncher';

export default function CoinsTableHeader() {
  return (
    <div className="card-header">
      <h4>Cryptocurrency Prices</h4>
      <ModalLauncher title="Cryptocurrency Prices">
        <ul>
          <li>
            The table serves as a snapshot of the cryptocurrency markets as of the currently
            selected date.
          </li>
          <li>
            The <strong>%7d</strong> column tells you how each cryptocurrency's price performed over
            the 7 days prior to the currently selected date.
          </li>
          <li>You may sort by any column, or filter the table using the input boxes.</li>
          <li>To place a trade, find the coin you are interested in and click its symbol.</li>
        </ul>
      </ModalLauncher>
    </div>
  );
}
