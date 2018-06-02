import React from 'react';
import { Table } from 'reactstrap';
import Filter from '../components/Filter';

const HistoryContainer = () => (
  <div>
    <h4 className="mb-4">Trade History</h4>
    <Filter />
    <Table responsive bordered className="mt-3">
      <thead className="thead-light">
        <tr>
          <th>Date</th>
          <th>Symbol</th>
          <th>Type</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01/01/2017</td>
          <td>BTC</td>
          <td>Buy</td>
          <td>$1,017.2</td>
          <td>1.5</td>
          <td>$2,034.4</td>
        </tr>
        <tr>
          <td>01/01/2017</td>
          <td>ETH</td>
          <td>Buy</td>
          <td>$8.2694</td>
          <td>100</td>
          <td>$826.94</td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default HistoryContainer;
