import React from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { round } from '../helpers';

export default function CoinsTable(props) {
  const coinRows = props.priceData.map(coin => (
    <tr>
      <td>{coin.currency}</td>
      <td>${coin.current}</td>
      <td>${coin.sevenDaysAgo === 'N/A' ? 'N/A' : round(coin.current - coin.sevenDaysAgo)}</td>
      <td>
        <Link to="/dashboard/trade">Trade</Link>
      </td>
    </tr>
  ));

  return (
    <Table responsive bordered className="mt-3">
      <thead className="thead-light">
        <tr>
          <th>Symbol</th>
          <th>Price</th>
          <th>7d</th>
          <th />
        </tr>
      </thead>
      {coinRows}
      <tbody />
    </Table>
  );
}
