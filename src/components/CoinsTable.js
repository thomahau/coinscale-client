import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { round } from '../helpers';

export function CoinsTableContainer(props) {
  const coinRows = props.data.map(coin => (
    <tr>
      <td>{coin.currency}</td>
      <td>${coin.close}</td>
      <td>${round(coin.close - coin.open)}</td>
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
      <tbody>{coinRows}</tbody>
    </Table>
  );
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps)(CoinsTableContainer);
