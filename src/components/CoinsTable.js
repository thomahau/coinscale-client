import React from 'react';
import { Table, UncontrolledTooltip } from 'reactstrap';
import { Link } from 'react-router-dom';
import { round } from '../helpers';

export default function CoinsTable(props) {
  const coinRows = props.priceData.map(coin => (
    <tr key={coin.currency}>
      <td>
        <Link to="/dashboard/trade" id={coin.currency} onClick={e => props.tradeCoin(coin)}>
          {coin.currency}
        </Link>
        <UncontrolledTooltip delay={{ show: 0, hide: 0 }} target={coin.currency}>
          {coin.name}
        </UncontrolledTooltip>
      </td>
      <td>${coin.current}</td>
      <td>${coin.sevenDaysAgo === 'N/A' ? 'N/A' : round(coin.current - coin.sevenDaysAgo)}</td>
      <td>
        <Link to="/dashboard/trade" onClick={event => props.tradeCoin(coin)}>
          Trade
        </Link>
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
      <tbody>{coinRows}</tbody>
    </Table>
  );
}
