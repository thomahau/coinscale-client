import React from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default function HoldingsTable(props) {
  const { data, tradeCoin } = props;
  const columns = [
    {
      Header: 'All Cryptocurrency Holdings',
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
        { Header: 'Amount', accessor: 'amount' },
        {
          Header: 'Cost Basis',
          accessor: 'costBasis',
          Cell: props =>
            (props.value < 1
              ? '~$0'
              : new Intl.NumberFormat('en-EN', {
                style: 'currency',
                currency: 'USD',
                minimumSignificantDigits: 1,
                maximumSignificantDigits: 3
              }).format(props.value))
        },
        {
          Header: 'Current Value',
          accessor: 'currentValue',
          Cell: props =>
            (props.value < 1
              ? '~$0'
              : new Intl.NumberFormat('en-EN', {
                style: 'currency',
                currency: 'USD',
                minimumSignificantDigits: 1,
                maximumSignificantDigits: 3
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
                maximumSignificantDigits: 3
              }).format(props.value))
        },
        {
          Header: 'Current Price',
          accessor: 'currentPrice',
          Cell: props =>
            new Intl.NumberFormat('en-EN', {
              style: 'currency',
              currency: 'USD',
              minimumSignificantDigits: 1,
              maximumSignificantDigits: 3
            }).format(props.value)
        },
        {
          Header: '% 7d',
          accessor: 'sevenDaysPerformance',
          Cell: row => <span style={{ color: row.value > 0 ? 'green' : 'red' }}>{row.value}%</span>
        }
      ]
    }
  ];

  return <ReactTable data={data} columns={columns} defaultPageSize={10} showPagination={false} />;
}
