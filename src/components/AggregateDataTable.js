import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default function AggregateDataTable(props) {
  const { data } = props;
  const columns = [
    {
      Header: 'Cash Balance',
      columns: [
        {
          Header: '',
          accessor: 'balance',
          Cell: props =>
            new Intl.NumberFormat('en-EN', {
              style: 'currency',
              currency: 'USD',
              minimumSignificantDigits: 1,
              maximumSignificantDigits: 5
            }).format(props.value)
        }
      ]
    },
    {
      Header: 'Cryptocurrency Totals',
      columns: [
        {
          Header: 'Cost Basis',
          accessor: 'costBasis',
          Cell: props =>
            (props.value < 1
              ? '$0'
              : new Intl.NumberFormat('en-EN', {
                style: 'currency',
                currency: 'USD',
                minimumSignificantDigits: 1,
                maximumSignificantDigits: 5
              }).format(props.value))
        },
        {
          Header: 'Current Value',
          accessor: 'currentValue',
          Cell: props =>
            (props.value < 1
              ? '$0'
              : new Intl.NumberFormat('en-EN', {
                style: 'currency',
                currency: 'USD',
                minimumSignificantDigits: 1,
                maximumSignificantDigits: 5
              }).format(props.value))
        },
        {
          Header: 'Profit/Loss',
          accessor: 'profit',
          Cell: props =>
            (props.value < 1
              ? '$0'
              : new Intl.NumberFormat('en-EN', {
                style: 'currency',
                currency: 'USD',
                minimumSignificantDigits: 1,
                maximumSignificantDigits: 5
              }).format(props.value))
        },
        {
          Header: '% 7d',
          accessor: 'sevenDaysPerformance',
          Cell: row =>
            (row.value === 'NaN' ? (
              'N/A'
            ) : (
              <span style={{ color: row.value > 0 ? 'green' : 'red' }}>{row.value}%</span>
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
      className="mb-5"
    />
  );
}
