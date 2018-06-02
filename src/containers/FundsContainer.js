import React from 'react';
import { Table } from 'reactstrap';

const FundsContainer = () => (
  <div>
    <h4 className="mb-4">Funds</h4>
    <Table responsive bordered className="mt-3">
      <thead className="thead-light">
        <tr>
          <th>Cost basis</th>
          <th>Current value</th>
          <th>Profit/Loss</th>
          <th>7d</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>$10,000</td>
          <td>$22,000</td>
          <td>$12,000</td>
          <td>$1,017.2</td>
        </tr>
      </tbody>
    </Table>
    <Table responsive bordered className="mt-3">
      <thead className="thead-light">
        <tr>
          <th>Symbol</th>
          <th>Quantity</th>
          <th>Cost basis</th>
          <th>Current value</th>
          <th>Profit/Loss</th>
          <th>Current price</th>
          <th>7d</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BTC</td>
          <td>1.5</td>
          <td>$8,000</td>
          <td>$11,000</td>
          <td>$3,000</td>
          <td>$1,017.2</td>
          <td>$103</td>
        </tr>
        <tr>
          <td>ETH</td>
          <td>100</td>
          <td>$800</td>
          <td>$900</td>
          <td>$100</td>
          <td>$8.26940</td>
          <td>$0.9473</td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default FundsContainer;
