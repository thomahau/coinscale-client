import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './AggregateDataTable.css';

export default function AggregateDataTable(props) {
  const { data } = props;
  const columns = [
    {
      Header: <span className="u-pull-right">Cash Balance</span>,
      columns: [
        {
          Header: '',
          accessor: 'balance',
          maxWidth: 130,
          Cell: row => (
            <span className="monospace u-pull-right">
              {new Intl.NumberFormat('en-EN', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2
              }).format(row.value)}
            </span>
          )
        }
      ]
    },
    {
      Header: 'Cryptocurrency Totals',
      columns: [
        {
          Header: <span className="u-pull-right">Cost Basis</span>,
          accessor: 'costBasis',
          Cell: row =>
            (row.value < 1 ? (
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
          Header: <span className="u-pull-right">Profit/Loss</span>,
          accessor: 'profit',
          Cell: row =>
            (row.value === 0 ? (
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
          Header: <span className="u-pull-right">% 7d</span>,
          accessor: 'sevenDaysPerformance',
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
      defaultPageSize={1}
      showPagination={false}
      sortable={false}
      className="aggregate-data-table"
    />
  );
}
