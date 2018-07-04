import React from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default function HoldingsTable(props) {
  const { data, tradeCoin } = props;
  const columns = [
    {
      Header: 'Cryptocurrency Holdings',
      columns: [
        {
          Header: 'Symbol',
          accessor: 'symbol',
          Cell: row => (
            <Link to="/dashboard/trade" id={row.value} onClick={e => tradeCoin(row.value)}>
              {row.value}
            </Link>
          )
        },
        {
          Header: 'Amount',
          accessor: 'amount',
          Cell: props => <span className="monospace">{props.value}</span>
        },
        {
          Header: 'Cost Basis',
          accessor: 'costBasis',
          Cell: row =>
            (row.value < 0.1 ? (
              <span className="monospace">$0</span>
            ) : (
              <span className="monospace">
                {new Intl.NumberFormat('en-EN', {
                  style: 'currency',
                  currency: 'USD',
                  minimumSignificantDigits: 1,
                  maximumSignificantDigits: 3
                }).format(row.value)}
              </span>
            ))
        },
        {
          Header: 'Current Value',
          accessor: 'currentValue',
          Cell: row =>
            (row.value < 0.1 ? (
              <span className="monospace">$0</span>
            ) : (
              <span className="monospace">
                {new Intl.NumberFormat('en-EN', {
                  style: 'currency',
                  currency: 'USD',
                  minimumSignificantDigits: 1,
                  maximumSignificantDigits: 3
                }).format(row.value)}
              </span>
            ))
        },
        {
          Header: 'Profit/Loss',
          accessor: 'profit',
          Cell: row =>
            (row.value < 0.1 ? (
              <span className="monospace">$0</span>
            ) : (
              <span className="monospace">
                {new Intl.NumberFormat('en-EN', {
                  style: 'currency',
                  currency: 'USD',
                  minimumSignificantDigits: 1,
                  maximumSignificantDigits: 4
                }).format(row.value)}
              </span>
            ))
        },
        {
          Header: 'Current Price',
          accessor: 'currentPrice',
          Cell: row => (
            <span className="monospace">
              {new Intl.NumberFormat('en-EN', {
                style: 'currency',
                currency: 'USD',
                minimumSignificantDigits: 1,
                maximumSignificantDigits: 4
              }).format(row.value)}
            </span>
          )
        },
        {
          Header: '% 7d',
          accessor: 'sevenDaysPerformance',
          Cell: row => (
            <span className="monospace" style={{ color: row.value > 0 ? 'green' : 'red' }}>
              {row.value}%
            </span>
          )
        }
      ]
    }
  ];

  return <ReactTable data={data} columns={columns} defaultPageSize={10} showPagination={false} />;
}
