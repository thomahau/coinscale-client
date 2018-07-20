import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { sortFix } from '../../../../../../helpers';

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
            <button className="table-btn" onClick={() => tradeCoin(row.value)}>
              {row.value}
            </button>
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
          Cell: row => (
            <span className="monospace u-pull-right">
              {new Intl.NumberFormat('en-EN', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2
              }).format(row.value)}
            </span>
          )
        },
        {
          Header: <span className="u-pull-right">Current Value</span>,
          accessor: 'currentValue',
          Cell: row =>
            (row.value === 0 ? (
              <span className="monospace u-pull-right">$0</span>
            ) : (
              <span className="monospace u-pull-right">
                {new Intl.NumberFormat('en-EN', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2
                }).format(row.value)}
              </span>
            ))
        },
        {
          Header: <span className="u-pull-right">Unrealized P/L</span>,
          accessor: 'unrealizedProfit',
          Cell: row =>
            (row.value < 0.01 && row.value > -0.01 ? (
              <span className="monospace u-pull-right">$0</span>
            ) : (
              <span
                className="monospace u-pull-right"
                style={{ color: row.value >= 0 ? 'green' : 'red' }}
              >
                {new Intl.NumberFormat('en-EN', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2
                }).format(row.value)}
              </span>
            ))
        },
        {
          Header: <span className="u-pull-right">Realized P/L</span>,
          accessor: 'realizedProfit',
          Cell: row =>
            (row.value < 0.01 && row.value > -0.01 ? (
              <span className="monospace u-pull-right">$0</span>
            ) : (
              <span
                className="monospace u-pull-right"
                style={{ color: row.value >= 0 ? 'green' : 'red' }}
              >
                {new Intl.NumberFormat('en-EN', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2
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
                minimumSignificantDigits: 1
              }).format(row.value)}
            </span>
          )
        },
        {
          Header: <span className="u-pull-right">% 7d</span>,
          accessor: 'sevenDaysPerformance',
          sortMethod: (a, b, desc) => sortFix(a, b, desc),
          Cell: row =>
            (row.value === 'NaN' ? (
              <span className="monospace u-pull-right">N/A</span>
            ) : (
              <span
                className="monospace u-pull-right"
                style={{ color: row.value >= 0 ? 'green' : 'red' }}
              >
                {row.value}%
              </span>
            ))
        }
      ]
    }
  ];

  return (
    <ReactTable
      data={data}
      columns={columns}
      defaultPageSize={5}
      pageSizeOptions={[5, 10, 15, 20]}
      minRows={3}
      className="-striped"
      noDataText="No holdings found"
    />
  );
}
