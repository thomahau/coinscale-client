import React from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { sortFix } from '../../../../../helpers';

export default function HoldingsTable(props) {
  const { data, tradeCoin } = props;
  const columns = [
    {
      Header: 'Cryptocurrency Holdings',
      columns: [
        {
          Header: <span className="u-pull-left">Symbol</span>,
          accessor: 'symbol',
          maxWidth: 90,
          Cell: row => (
            <Link to="/dashboard/trade" id={row.value} onClick={e => tradeCoin(row.value)}>
              {row.value}
            </Link>
          )
        },
        {
          Header: <span className="u-pull-right">Amount</span>,
          accessor: 'amount',
          Cell: props => <span className="monospace u-pull-right">{props.value}</span>
        },
        {
          Header: <span className="u-pull-right">Cost Basis</span>,
          accessor: 'costBasis',
          Cell: row =>
            (row.value < 0.1 ? (
              <span className="monospace u-pull-right">$0</span>
            ) : (
              <span className="monospace u-pull-right">
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
          Header: <span className="u-pull-right">Current Value</span>,
          accessor: 'currentValue',
          Cell: row =>
            (row.value < 0.1 ? (
              <span className="monospace u-pull-right">$0</span>
            ) : (
              <span className="monospace u-pull-right">
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
          Header: <span className="u-pull-right">Profit/Loss</span>,
          accessor: 'profit',
          Cell: row =>
            (row.value < 0.01 ? (
              <span className="monospace u-pull-right">$0</span>
            ) : (
              <span className="monospace u-pull-right">
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
          Header: <span className="u-pull-right">Current Price</span>,
          accessor: 'currentPrice',
          Cell: row => (
            <span className="monospace u-pull-right">
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
          Header: <span className="u-pull-right">% 7d</span>,
          accessor: 'sevenDaysPerformance',
          sortMethod: (a, b, desc) => sortFix(a, b, desc),
          Cell: row => (
            <span
              className="monospace u-pull-right"
              style={{ color: row.value > 0 ? 'green' : 'red' }}
            >
              {row.value}%
            </span>
          )
        }
      ]
    }
  ];

  return <ReactTable data={data} columns={columns} defaultPageSize={10} className="-striped" />;
}
