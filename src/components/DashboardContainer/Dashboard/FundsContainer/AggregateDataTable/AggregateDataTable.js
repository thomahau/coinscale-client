import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './AggregateDataTable.css';

export default function AggregateDataTable(props) {
  const { data } = props;
  const columns = [
    {
      Header: 'Cash Balance',
      columns: [
        {
          Header: '',
          accessor: 'balance',
          Cell: row => (
            <span className="monospace">
              {new Intl.NumberFormat('en-EN', {
                style: 'currency',
                currency: 'USD',
                minimumSignificantDigits: 1,
                maximumSignificantDigits: 5
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
          Header: 'Cost Basis',
          accessor: 'costBasis',
          Cell: row =>
            (row.value < 1 ? (
              <span className="monospace">$0</span>
            ) : (
              <span className="monospace">
                {new Intl.NumberFormat('en-EN', {
                  style: 'currency',
                  currency: 'USD',
                  minimumSignificantDigits: 1,
                  maximumSignificantDigits: 5
                }).format(row.value)}
              </span>
            ))
        },
        {
          Header: 'Current Value',
          accessor: 'currentValue',
          Cell: row =>
            (row.value < 1 ? (
              <span className="monospace">$0</span>
            ) : (
              <span className="monospace">
                {new Intl.NumberFormat('en-EN', {
                  style: 'currency',
                  currency: 'USD',
                  minimumSignificantDigits: 1,
                  maximumSignificantDigits: 5
                }).format(row.value)}
              </span>
            ))
        },
        {
          Header: 'Profit/Loss',
          accessor: 'profit',
          Cell: row =>
            (row.value < 1 ? (
              <span className="monospace">$0</span>
            ) : (
              <span className="monospace">
                {new Intl.NumberFormat('en-EN', {
                  style: 'currency',
                  currency: 'USD',
                  minimumSignificantDigits: 1,
                  maximumSignificantDigits: 5
                }).format(row.value)}
              </span>
            ))
        },
        {
          Header: '% 7d',
          accessor: 'sevenDaysPerformance',
          Cell: row =>
            (row.value === 'NaN' ? (
              <span className="monospace">N/A</span>
            ) : (
              <span className="monospace" style={{ color: row.value > 0 ? 'green' : 'red' }}>
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
