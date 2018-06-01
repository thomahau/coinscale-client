import React from 'react';
import { Table } from 'reactstrap';

const MOCK_DATA = [
  {
    currency: 'BTC',
    open: '914.19659',
    open_timestamp: '2016-12-25T00:00:00Z',
    close: '1017.20065',
    close_timestamp: '2017-01-01T00:00:00Z'
  },
  {
    currency: 'ETH',
    open: '7.32209',
    open_timestamp: '2016-12-25T00:00:00Z',
    close: '8.26940',
    close_timestamp: '2017-01-01T00:00:00Z'
  },
  {
    currency: 'LTC',
    open: '4.45150',
    open_timestamp: '2016-12-25T00:00:00Z',
    close: '4.52392',
    close_timestamp: '2017-01-01T00:00:00Z'
  }
];

const CoinsTableContainer = () => (
  <Table responsive className="mt-3">
    <thead className="thead-light">
      <tr>
        <th>Symbol</th>
        <th>Price</th>
        <th>7d</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{MOCK_DATA[0].currency}</td>
        <td>${MOCK_DATA[0].close}</td>
        <td>${(MOCK_DATA[0].close - MOCK_DATA[0].open).toPrecision(4)}</td>
        <td>
          <a href="/dashboard/trade">Trade</a>
        </td>
      </tr>
      <tr>
        <td>{MOCK_DATA[1].currency}</td>
        <td>${MOCK_DATA[1].close}</td>
        <td>${(MOCK_DATA[1].close - MOCK_DATA[1].open).toPrecision(4)}</td>
        <td>
          <a href="/dashboard/trade">Trade</a>
        </td>
      </tr>
      <tr>
        <td>{MOCK_DATA[2].currency}</td>
        <td>${MOCK_DATA[2].close}</td>
        <td>${(MOCK_DATA[2].close - MOCK_DATA[2].open).toPrecision(4)}</td>
        <td>
          <a href="/dashboard/trade">Trade</a>
        </td>
      </tr>
    </tbody>
  </Table>
);

export default CoinsTableContainer;
